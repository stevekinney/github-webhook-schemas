#!/usr/bin/env bun
/**
 * Generates Zod schemas for all GitHub webhook event types.
 *
 * This script uses ts-morph to parse the @octokit/webhooks-types schema
 * and generates corresponding Zod schemas with full type safety.
 */

import { mkdir, rm } from 'node:fs/promises';
import { resolve } from 'node:path';

import { kebabCase, pascalCase } from 'change-case';
import {
  type InterfaceDeclaration,
  Project,
  type PropertySignature,
  type SourceFile,
  SyntaxKind,
  type Type,
  type TypeAliasDeclaration,
} from 'ts-morph';

const ROOT_DIR = resolve(import.meta.dirname, '..');
const SCHEMA_PATH = resolve(ROOT_DIR, 'node_modules/@octokit/webhooks-types/schema.d.ts');
const OUTPUT_DIR = resolve(ROOT_DIR, 'src/schemas');
const SHARED_DIR = resolve(OUTPUT_DIR, 'shared');

// Store interface declarations for lookup
const interfaceMap = new Map<string, InterfaceDeclaration>();
// Store type alias declarations for lookup
const typeAliasMap = new Map<string, TypeAliasDeclaration>();
// Track all event interface names
const eventInterfaceNames = new Set<string>();

// Collect all shared types needed (non-event interfaces/type aliases)
const sharedTypes = new Set<string>();
// Track generated shared types
const generatedSharedTypes = new Set<string>();

// Types to skip (built-in or complex recursive types)
const SKIP_TYPES = new Set([
  'Date',
  'Record',
  'Array',
  'Promise',
  'Map',
  'Set',
  'RegExp',
]);

function collectReferencedTypes(
  type: Type,
  sourceFile: SourceFile,
  visited = new Set<string>(),
): void {
  const typeText = type.getText();

  // Prevent infinite recursion
  if (visited.has(typeText)) return;
  visited.add(typeText);

  // Handle union types
  if (type.isUnion()) {
    for (const unionType of type.getUnionTypes()) {
      collectReferencedTypes(unionType, sourceFile, visited);
    }
    return;
  }

  // Handle intersection types
  if (type.isIntersection()) {
    for (const intersectionType of type.getIntersectionTypes()) {
      collectReferencedTypes(intersectionType, sourceFile, visited);
    }
    return;
  }

  // Handle arrays
  if (type.isArray()) {
    const elementType = type.getArrayElementType();
    if (elementType) {
      collectReferencedTypes(elementType, sourceFile, visited);
    }
    return;
  }

  // Handle tuples
  if (type.isTuple()) {
    for (const tupleType of type.getTupleElements()) {
      collectReferencedTypes(tupleType, sourceFile, visited);
    }
    return;
  }

  // Handle object types
  if (type.isObject()) {
    const symbol = type.getSymbol() || type.getAliasSymbol();
    const typeName = symbol?.getName();

    // Skip built-in types
    if (typeName && SKIP_TYPES.has(typeName)) return;

    // If it's a named type (interface or type alias) that's not an event, add it to shared types
    if (typeName && typeName !== '__type') {
      if (!eventInterfaceNames.has(typeName)) {
        if (interfaceMap.has(typeName) || typeAliasMap.has(typeName)) {
          sharedTypes.add(typeName);
        }
      }
    }

    // Recursively collect types from properties
    for (const prop of type.getProperties()) {
      const propType = prop.getTypeAtLocation(sourceFile);
      collectReferencedTypes(propType, sourceFile, visited);
    }
  }
}

function getTypeText(type: Type, sourceFile: SourceFile, depth = 0): string {
  // Prevent excessive recursion
  if (depth > 10) return 'z.unknown()';

  // Handle primitive types
  if (type.isString()) return 'z.string()';
  if (type.isNumber()) return 'z.number()';
  if (type.isBoolean()) return 'z.boolean()';
  if (type.isNull()) return 'z.null()';
  if (type.isUndefined()) return 'z.undefined()';
  if (type.isAny()) return 'z.any()';
  if (type.isUnknown()) return 'z.unknown()';
  if (type.isNever()) return 'z.never()';

  // Handle literal types
  if (type.isStringLiteral()) {
    const value = type.getLiteralValue();
    return `z.literal(${JSON.stringify(value)})`;
  }
  if (type.isNumberLiteral()) {
    const value = type.getLiteralValue();
    return `z.literal(${value})`;
  }
  if (type.isBooleanLiteral()) {
    // getLiteralValue() returns undefined for false, so check the type text
    const typeText = type.getText();
    const value = typeText === 'true' ? true : false;
    return `z.literal(${value})`;
  }

  // Handle empty array/tuple types that ts-morph doesn't correctly identify
  const typeText = type.getText();
  if (typeText === '[]' || typeText === 'never[]') {
    // Empty array type - use z.tuple([]) for fixed empty or z.array(z.never()) for never[]
    return 'z.tuple([])';
  }
  // Handle tuple literals like ["*"]
  if (typeText.startsWith('[') && typeText.endsWith(']') && !typeText.includes('...')) {
    // Check if it's a tuple type by trying to parse it
    const tupleContent = typeText.slice(1, -1).trim();
    if (tupleContent) {
      // Has elements - try to get tuple elements
      if (type.isTuple()) {
        const tupleTypes = type.getTupleElements();
        const tupleSchemas = tupleTypes.map((t) => getTypeText(t, sourceFile, depth + 1));
        return `z.tuple([${tupleSchemas.join(', ')}])`;
      }
    }
    // Empty tuple
    return 'z.tuple([])';
  }

  // Handle arrays
  if (type.isArray()) {
    const elementType = type.getArrayElementType();
    if (elementType) {
      return `z.array(${getTypeText(elementType, sourceFile, depth + 1)})`;
    }
    return 'z.array(z.unknown())';
  }

  // Handle union types
  if (type.isUnion()) {
    const unionTypes = type.getUnionTypes();

    // Check for nullable union (T | null)
    const nullIndex = unionTypes.findIndex((t) => t.isNull());
    const undefinedIndex = unionTypes.findIndex((t) => t.isUndefined());

    const nonNullTypes = unionTypes.filter((t) => !t.isNull() && !t.isUndefined());
    const hasNull = nullIndex !== -1;
    const hasUndefined = undefinedIndex !== -1;

    if (nonNullTypes.length === 0) {
      if (hasNull && hasUndefined) return 'z.null().optional()';
      if (hasNull) return 'z.null()';
      if (hasUndefined) return 'z.undefined()';
      return 'z.never()';
    }

    if (nonNullTypes.length === 1) {
      const firstType = nonNullTypes[0];
      if (!firstType) return 'z.unknown()';
      let result = getTypeText(firstType, sourceFile, depth + 1);
      if (hasNull) result += '.nullable()';
      if (hasUndefined) result += '.optional()';
      return result;
    }

    // Regular union
    const unionSchemas = nonNullTypes.map((t) => getTypeText(t, sourceFile, depth + 1));
    let result = `z.union([${unionSchemas.join(', ')}])`;
    if (hasNull) result += '.nullable()';
    if (hasUndefined) result += '.optional()';
    return result;
  }

  // Handle intersection types
  if (type.isIntersection()) {
    const intersectionTypes = type.getIntersectionTypes();
    const schemas = intersectionTypes.map((t) => getTypeText(t, sourceFile, depth + 1));
    if (schemas.length === 0) return 'z.unknown()';
    if (schemas.length === 1) return schemas[0] ?? 'z.unknown()';
    return schemas.reduce((acc, schema, i) => {
      if (i === 0) return schema ?? 'z.unknown()';
      return `${acc}.and(${schema})`;
    });
  }

  // Handle object/interface types
  if (type.isObject()) {
    const symbol = type.getSymbol() || type.getAliasSymbol();
    const typeName = symbol?.getName();

    // Skip built-in types
    if (typeName && SKIP_TYPES.has(typeName)) {
      return 'z.unknown()';
    }

    // Check if it's a named shared type
    if (typeName && typeName !== '__type' && sharedTypes.has(typeName)) {
      return `${typeName}Schema`;
    }

    // Handle inline object types
    const properties = type.getProperties();
    if (properties.length > 0) {
      const propSchemas: string[] = [];

      for (const prop of properties) {
        let propName = prop.getName();
        // Strip quotes from property names if ts-morph returns them quoted
        if (
          (propName.startsWith('"') && propName.endsWith('"')) ||
          (propName.startsWith("'") && propName.endsWith("'"))
        ) {
          propName = propName.slice(1, -1);
        }
        const propType = prop.getTypeAtLocation(sourceFile);
        const isOptional = prop.isOptional();
        const propDeclarations = prop.getDeclarations();
        const hasQuestionToken = propDeclarations.some(
          (d) =>
            d.getKind() === SyntaxKind.PropertySignature &&
            (d as PropertySignature).hasQuestionToken(),
        );

        let schema = getTypeText(propType, sourceFile, depth + 1);
        if ((isOptional || hasQuestionToken) && !schema.includes('.optional()')) {
          schema += '.optional()';
        }

        // Handle property names that need quoting - use double quotes to match TypeScript conventions
        const needsQuotes = /[^a-zA-Z0-9_$]/.test(propName) || /^\d/.test(propName);
        const key = needsQuotes ? `"${propName}"` : propName;
        propSchemas.push(`  ${key}: ${schema},`);
      }
      return `z.object({\n${propSchemas.join('\n')}\n})`;
    }

    // Empty object
    return 'z.object({})';
  }

  // Handle tuple types
  if (type.isTuple()) {
    const tupleTypes = type.getTupleElements();
    const tupleSchemas = tupleTypes.map((t) => getTypeText(t, sourceFile, depth + 1));
    return `z.tuple([${tupleSchemas.join(', ')}])`;
  }

  // Fallback
  if (typeText === 'Date') return 'z.coerce.date()';
  if (typeText.startsWith('Record<')) return 'z.record(z.string(), z.unknown())';

  return 'z.unknown()';
}

function getSchemaForTypeText(typeText: string): string | null {
  // Check if the type text references a shared type
  const cleanType = typeText.trim();

  // Direct shared type reference
  if (sharedTypes.has(cleanType)) {
    return `${cleanType}Schema`;
  }

  // Nullable shared type: "Type | null"
  const nullableMatch = cleanType.match(/^(\w+)\s*\|\s*null$/);
  if (nullableMatch?.[1] && sharedTypes.has(nullableMatch[1])) {
    return `${nullableMatch[1]}Schema.nullable()`;
  }

  // Null or Type: "null | Type"
  const nullFirstMatch = cleanType.match(/^null\s*\|\s*(\w+)$/);
  if (nullFirstMatch?.[1] && sharedTypes.has(nullFirstMatch[1])) {
    return `${nullFirstMatch[1]}Schema.nullable()`;
  }

  return null;
}

function generateInterfaceSchema(
  declaration: InterfaceDeclaration,
  sourceFile: SourceFile,
): string {
  const properties = declaration.getProperties();
  const propSchemas = properties.map((prop) => {
    let propName = prop.getName();
    // Strip quotes from property names if ts-morph returns them quoted
    if (
      (propName.startsWith('"') && propName.endsWith('"')) ||
      (propName.startsWith("'") && propName.endsWith("'"))
    ) {
      propName = propName.slice(1, -1);
    }
    const propType = prop.getType();
    const isOptional = prop.hasQuestionToken();

    // Try to get the type from the type annotation first (preserves type names)
    const typeNode = prop.getTypeNode();
    const typeNodeText = typeNode?.getText();

    let schema: string;

    // Check if the type annotation references a shared type
    const sharedSchema = typeNodeText ? getSchemaForTypeText(typeNodeText) : null;
    if (sharedSchema) {
      schema = sharedSchema;
    } else {
      schema = getTypeText(propType, sourceFile);
    }

    if (isOptional && !schema.includes('.optional()')) {
      schema += '.optional()';
    }

    // Use double quotes to match TypeScript conventions
    const needsQuotes = /[^a-zA-Z0-9_$]/.test(propName) || /^\d/.test(propName);
    const key = needsQuotes ? `"${propName}"` : propName;
    return `  ${key}: ${schema},`;
  });

  return `z.object({\n${propSchemas.join('\n')}\n})`;
}

function generateTypeAliasSchema(
  declaration: TypeAliasDeclaration,
  sourceFile: SourceFile,
): string {
  const type = declaration.getType();
  return getTypeText(type, sourceFile);
}

function getSharedTypeDependencies(schemaCode: string): Set<string> {
  const deps = new Set<string>();
  const schemaMatches = schemaCode.matchAll(/(\w+)Schema/g);
  for (const match of schemaMatches) {
    const depName = match[1];
    if (depName && sharedTypes.has(depName)) {
      deps.add(depName);
    }
  }
  return deps;
}

async function generateSharedSchemas(sourceFile: SourceFile): Promise<void> {
  await mkdir(SHARED_DIR, { recursive: true });

  // Build dependency graph
  const dependencyGraph = new Map<string, Set<string>>();
  const schemaCodeMap = new Map<string, string>();

  for (const typeName of sharedTypes) {
    const interfaceDecl = interfaceMap.get(typeName);
    const typeAliasDecl = typeAliasMap.get(typeName);

    let schemaCode: string;
    if (interfaceDecl) {
      schemaCode = generateInterfaceSchema(interfaceDecl, sourceFile);
    } else if (typeAliasDecl) {
      schemaCode = generateTypeAliasSchema(typeAliasDecl, sourceFile);
    } else {
      console.warn(`Warning: Could not find declaration for ${typeName}`);
      continue;
    }

    schemaCodeMap.set(typeName, schemaCode);
    dependencyGraph.set(typeName, getSharedTypeDependencies(schemaCode));
  }

  // Topological sort for generation order
  const sorted: string[] = [];
  const visited = new Set<string>();
  const visiting = new Set<string>();

  function visit(name: string): void {
    if (visited.has(name)) return;
    if (visiting.has(name)) {
      // Circular dependency - we'll handle with z.lazy()
      return;
    }
    visiting.add(name);
    const deps = dependencyGraph.get(name) || new Set();
    for (const dep of deps) {
      if (sharedTypes.has(dep)) {
        visit(dep);
      }
    }
    visiting.delete(name);
    visited.add(name);
    sorted.push(name);
  }

  for (const name of sharedTypes) {
    visit(name);
  }

  // Generate files
  for (const typeName of sorted) {
    const schemaCode = schemaCodeMap.get(typeName);
    if (!schemaCode) continue;

    generatedSharedTypes.add(typeName);
    const deps = dependencyGraph.get(typeName) || new Set();
    const fileName = kebabCase(typeName);

    const imports = [`import { z } from 'zod';`];
    const importedDeps = [...deps].filter(
      (d) => d !== typeName && generatedSharedTypes.has(d),
    );
    // Import from individual files to avoid circular dependencies
    for (const dep of importedDeps.sort()) {
      imports.push(`import { ${dep}Schema } from './${kebabCase(dep)}.js';`);
    }

    const content = `/**
 * Auto-generated Zod schema for ${typeName}
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

${imports.join('\n')}

import type { ${typeName} as ${typeName}Octokit } from '@octokit/webhooks-types';

export const ${typeName}Schema = ${schemaCode} satisfies z.ZodType<${typeName}Octokit>;

export type ${typeName} = ${typeName}Octokit;

export function is${typeName}(value: unknown): value is ${typeName} {
  return ${typeName}Schema.safeParse(value).success;
}
`;

    await Bun.write(resolve(SHARED_DIR, `${fileName}.ts`), content);
  }

  // Generate shared index
  const sharedExports = [...generatedSharedTypes]
    .sort()
    .map(
      (name) =>
        `export { ${name}Schema, type ${name}, is${name} } from './${kebabCase(name)}.js';`,
    )
    .join('\n');

  await Bun.write(
    resolve(SHARED_DIR, 'index.ts'),
    `/**
 * Auto-generated barrel export for shared schemas
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

${sharedExports}
`,
  );
}

async function generateEventSchemas(sourceFile: SourceFile): Promise<string[]> {
  const eventNames: string[] = [];

  for (const eventName of eventInterfaceNames) {
    const eventInterface = interfaceMap.get(eventName);
    if (!eventInterface) continue;

    eventNames.push(eventName);
    const fileName = kebabCase(eventName);

    const schemaCode = generateInterfaceSchema(eventInterface, sourceFile);
    const deps = getSharedTypeDependencies(schemaCode);

    // Generate imports
    const imports = [`import { z } from 'zod';`];
    if (deps.size > 0) {
      const depImports = [...deps]
        .sort()
        .map((d) => `${d}Schema`)
        .join(', ');
      imports.push(`import { ${depImports} } from './shared/index.js';`);
    }

    const content = `/**
 * Auto-generated Zod schema for ${eventName}
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

${imports.join('\n')}

import type { ${eventName} as ${eventName}Octokit } from '@octokit/webhooks-types';

export const ${eventName}Schema = ${schemaCode} satisfies z.ZodType<${eventName}Octokit>;

export type ${eventName} = ${eventName}Octokit;

export function is${eventName}(value: unknown): value is ${eventName} {
  return ${eventName}Schema.safeParse(value).success;
}
`;

    await Bun.write(resolve(OUTPUT_DIR, `${fileName}.ts`), content);

    // Generate test file
    const testContent = `/**
 * Auto-generated tests for ${eventName} schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import { ${eventName}Schema, type ${eventName} } from './${fileName}.js';

describe('${eventName}Schema', () => {
  it('should be a valid Zod schema', () => {
    expect(${eventName}Schema).toBeDefined();
    expect(typeof ${eventName}Schema.parse).toBe('function');
    expect(typeof ${eventName}Schema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = ${eventName}Schema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _${eventName}Test = ${eventName};
`;

    await Bun.write(resolve(OUTPUT_DIR, `${fileName}.test.ts`), testContent);
  }

  return eventNames;
}

async function generateBarrelExport(): Promise<void> {
  const files = await Array.fromAsync(
    new Bun.Glob('*.ts').scan({ cwd: OUTPUT_DIR, onlyFiles: true }),
  );

  const schemaFiles = files
    .filter((f) => !f.endsWith('.test.ts') && f !== 'index.ts')
    .sort();

  const exports = schemaFiles
    .map((file) => {
      const baseName = file.replace('.ts', '');
      const schemaName = pascalCase(baseName) + 'Schema';
      const typeName = pascalCase(baseName);
      const guardName = `is${typeName}`;
      return `export { ${schemaName}, type ${typeName}, ${guardName} } from './${baseName}.js';`;
    })
    .join('\n');

  const content = `/**
 * Auto-generated barrel export for webhook event schemas
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

// Shared types
export * from './shared/index.js';

// Event schemas
${exports}
`;

  await Bun.write(resolve(OUTPUT_DIR, 'index.ts'), content);
}

async function formatGeneratedFiles(): Promise<void> {
  console.log('Formatting generated files...');

  // Collect all generated files using Bun.Glob
  const glob = new Bun.Glob('**/*.ts');
  const files: string[] = [];
  for await (const file of glob.scan({ cwd: OUTPUT_DIR, absolute: true })) {
    files.push(file);
  }

  if (files.length === 0) {
    console.log('No files found to format');
    return;
  }

  console.log(`Formatting ${files.length} files...`);

  // Small delay to ensure all file writes are flushed to disk
  await new Promise((resolve) => setTimeout(resolve, 100));

  const BATCH_SIZE = 50;

  // Run eslint fix FIRST for import sorting (this may break formatting)
  console.log('Fixing imports with ESLint...');
  for (let i = 0; i < files.length; i += BATCH_SIZE) {
    const batch = files.slice(i, i + BATCH_SIZE);
    const eslintProc = Bun.spawn(['bunx', 'eslint', '--fix', ...batch], {
      cwd: ROOT_DIR,
      stdout: 'pipe',
      stderr: 'pipe',
    });
    await eslintProc.exited;
  }

  // Run prettier AFTER eslint to fix any formatting issues from import sorting
  console.log('Running prettier...');
  for (let i = 0; i < files.length; i += BATCH_SIZE) {
    const batch = files.slice(i, i + BATCH_SIZE);
    const prettierProc = Bun.spawn(
      ['bunx', 'prettier', '--no-cache', '--write', ...batch],
      {
        cwd: ROOT_DIR,
        stdout: 'inherit',
        stderr: 'inherit',
      },
    );
    await prettierProc.exited;
  }
}

async function main() {
  console.log('Generating webhook schemas...\n');

  // Clean output directory
  await rm(OUTPUT_DIR, { recursive: true, force: true });
  await mkdir(OUTPUT_DIR, { recursive: true });

  // Initialize project and parse schema
  const project = new Project({
    skipAddingFilesFromTsConfig: true,
  });

  const sourceFile = project.addSourceFileAtPath(SCHEMA_PATH);

  // Build interface and type alias maps
  console.log('Parsing schema...');
  for (const decl of sourceFile.getDescendantsOfKind(SyntaxKind.InterfaceDeclaration)) {
    const name = decl.getName();
    if (name) interfaceMap.set(name, decl);
  }

  for (const decl of sourceFile.getDescendantsOfKind(SyntaxKind.TypeAliasDeclaration)) {
    const name = decl.getName();
    if (name) typeAliasMap.set(name, decl);
  }

  // Identify event interfaces
  for (const [name] of interfaceMap) {
    if (name.endsWith('Event')) {
      eventInterfaceNames.add(name);
    }
  }

  console.log(`Found ${eventInterfaceNames.size} event interfaces`);

  // Collect all shared types referenced by events
  console.log('Collecting shared types...');
  for (const eventName of eventInterfaceNames) {
    const eventInterface = interfaceMap.get(eventName);
    if (!eventInterface) continue;
    collectReferencedTypes(eventInterface.getType(), sourceFile);
  }

  // Also collect types referenced by shared types (recursive dependencies)
  let previousSize = 0;
  while (sharedTypes.size !== previousSize) {
    previousSize = sharedTypes.size;
    for (const typeName of [...sharedTypes]) {
      const interfaceDecl = interfaceMap.get(typeName);
      const typeAliasDecl = typeAliasMap.get(typeName);
      if (interfaceDecl) {
        collectReferencedTypes(interfaceDecl.getType(), sourceFile);
      } else if (typeAliasDecl) {
        collectReferencedTypes(typeAliasDecl.getType(), sourceFile);
      }
    }
  }

  console.log(`Found ${sharedTypes.size} shared types`);

  // Generate shared schemas first
  console.log('Generating shared schemas...');
  await generateSharedSchemas(sourceFile);
  console.log(`  Generated ${generatedSharedTypes.size} shared schemas`);

  // Generate event schemas
  console.log('Generating event schemas...');
  const eventNames = await generateEventSchemas(sourceFile);
  console.log(`  Generated ${eventNames.length} event schemas`);
  console.log(`  Generated ${eventNames.length} test files`);

  // Generate barrel export
  console.log('Generating barrel export...');
  await generateBarrelExport();

  // Format generated files
  await formatGeneratedFiles();

  console.log('\nDone!');
}

main().catch(console.error);
