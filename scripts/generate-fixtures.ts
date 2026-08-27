#!/usr/bin/env bun
/**
 * Generates fixture factories for all GitHub webhook event types.
 */

import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

import { pascalCase } from 'change-case';

const ROOT_DIR = resolve(import.meta.dirname, '..');
const SCHEMAS_DIR = resolve(ROOT_DIR, 'src/schemas');
const OUTPUT_DIR = resolve(ROOT_DIR, 'src/fixtures');
const OUTPUT_FILE = resolve(OUTPUT_DIR, 'index.ts');

async function getSchemaFiles(): Promise<string[]> {
  const schemaFiles: string[] = [];
  const glob = new Bun.Glob('*.ts');

  for await (const file of glob.scan({ cwd: SCHEMAS_DIR })) {
    if (file.endsWith('.test.ts') || file === 'index.ts') continue;
    schemaFiles.push(file.replace('.ts', ''));
  }

  return schemaFiles.sort();
}

function renderFactories(eventNames: string[]): string {
  return eventNames
    .map((eventName) => {
      return `export function create${eventName}(overrides: DeepPartial<SchemaTypes.${eventName}> = {}): SchemaTypes.${eventName} {\n  return createFixture<SchemaTypes.${eventName}>(Schemas.${eventName}Schema, overrides);\n}`;
    })
    .join('\n\n');
}

async function main(): Promise<void> {
  const schemaFiles = await getSchemaFiles();
  const eventNames = schemaFiles.map((schemaFile) => pascalCase(schemaFile));

  const fileContents = `/**
 * Auto-generated fixture factories for webhook event schemas
 * DO NOT MODIFY - regenerate with: bun run scripts/generate-fixtures.ts
 */

import { z } from 'zod';

import type * as SchemaTypes from '../schemas/index.js';
import * as Schemas from '../schemas/index.js';

type DeepPartial<T> = T extends readonly (infer U)[]
  ? DeepPartial<U>[]
  : T extends object
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : T;

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function buildFixture(
  schema: z.ZodTypeAny,
  options: { includeOptional?: boolean } = {},
): unknown {
  const def = schema.def as unknown;

  switch (schema.type) {
    case 'default': {
      const { defaultValue, innerType } = def as {
        defaultValue?: unknown;
        innerType?: z.ZodTypeAny;
      };
      if (defaultValue !== undefined) {
        return defaultValue;
      }
      return innerType ? buildFixture(innerType, options) : null;
    }
    case 'optional': {
      const { innerType } = def as { innerType?: z.ZodTypeAny };
      if (options.includeOptional && innerType) {
        return buildFixture(innerType, options);
      }
      return undefined;
    }
    case 'nullable':
    case 'null':
      return null;
    case 'undefined':
      return undefined;
    case 'string':
      return '';
    case 'number':
      return 0;
    case 'boolean':
      return false;
    case 'literal': {
      const { values } = def as { values: unknown[] };
      return values[0];
    }
    case 'enum': {
      const { entries } = def as { entries: Record<string, string | number> };
      const values = Object.values(entries);
      return values[0] ?? null;
    }
    case 'array':
      return [];
    case 'tuple': {
      const { items } = def as { items: z.ZodTypeAny[] };
      return items.map((item) => buildFixture(item, options));
    }
    case 'union': {
      const { options: unionOptions } = def as { options: z.ZodTypeAny[] };
      const firstOption = unionOptions[0];
      return firstOption ? buildFixture(firstOption, options) : null;
    }
    case 'intersection': {
      const { left, right } = def as { left: z.ZodTypeAny; right: z.ZodTypeAny };
      const leftValue = buildFixture(left, options);
      const rightValue = buildFixture(right, { ...options, includeOptional: true });

      if (isPlainObject(leftValue) && isPlainObject(rightValue)) {
        return mergeFixture(leftValue, rightValue);
      }

      return rightValue ?? leftValue ?? null;
    }
    case 'object': {
      const { shape } = def as { shape: Record<string, z.ZodTypeAny> };
      const value: Record<string, unknown> = {};

      for (const [key, fieldSchema] of Object.entries(shape)) {
        const fieldValue = buildFixture(fieldSchema, options);
        if (fieldValue !== undefined) {
          value[key] = fieldValue;
        }
      }

      return value;
    }
    case 'record':
      return {};
    case 'lazy': {
      const { getter } = def as { getter: () => z.ZodTypeAny };
      return getter ? buildFixture(getter(), options) : null;
    }
    default:
      return null;
  }
}

function mergeFixture<T>(base: T, overrides?: DeepPartial<T>): T {
  if (overrides === undefined) {
    return base;
  }

  if (Array.isArray(base) || Array.isArray(overrides)) {
    return (overrides ?? base) as T;
  }

  if (isPlainObject(base) && isPlainObject(overrides)) {
    const result: Record<string, unknown> = { ...base };

    for (const [key, overrideValue] of Object.entries(overrides)) {
      if (overrideValue === undefined) {
        continue;
      }

      const baseValue = result[key];
      result[key] = isPlainObject(baseValue) && isPlainObject(overrideValue)
        ? mergeFixture(baseValue, overrideValue)
        : overrideValue;
    }

    return result as T;
  }

  return overrides as T;
}

function createFixture<T>(schema: z.ZodTypeAny, overrides?: DeepPartial<T>): T {
  const base = buildFixture(schema) as T;
  return mergeFixture(base, overrides);
}

${renderFactories(eventNames)}
`;

  await mkdir(OUTPUT_DIR, { recursive: true });
  await writeFile(OUTPUT_FILE, fileContents);

  const prettier = Bun.spawn(['bunx', 'prettier', '--write', OUTPUT_FILE], {
    cwd: ROOT_DIR,
    stdout: 'ignore',
    stderr: 'inherit',
  });
  if ((await prettier.exited) !== 0) {
    throw new Error('Failed to format generated fixtures');
  }

  console.log(`Generated fixtures for ${eventNames.length} events`);
}

main().catch((error) => {
  console.error('Failed to generate fixtures:', error);
  process.exit(1);
});
