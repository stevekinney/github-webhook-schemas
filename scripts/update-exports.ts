#!/usr/bin/env bun
/**
 * Updates package.json with individual entry points for each schema.
 * Run this after generating schemas to ensure all exports are up to date.
 */

import { resolve } from 'node:path';

const ROOT_DIR = resolve(import.meta.dirname, '..');
const SCHEMAS_DIR = resolve(ROOT_DIR, 'src/schemas');
const PACKAGE_JSON_PATH = resolve(ROOT_DIR, 'package.json');

interface ExportConditions {
  types: string;
  bun: string;
  import: string;
  default: string;
}

interface PackageExports {
  [key: string]: ExportConditions;
}

interface PackageJson {
  name: string;
  exports: PackageExports;
  [key: string]: unknown;
}

async function getSchemaFiles(): Promise<string[]> {
  const schemaFiles: string[] = [];
  const glob = new Bun.Glob('*.ts');

  for await (const file of glob.scan({ cwd: SCHEMAS_DIR })) {
    // Skip test/spec files and index files
    if (file.endsWith('.test.ts') || file.endsWith('.spec.ts') || file === 'index.ts')
      continue;
    schemaFiles.push(file.replace('.ts', ''));
  }

  return schemaFiles.sort();
}

async function getSharedSchemaFiles(): Promise<string[]> {
  const sharedFiles: string[] = [];
  const sharedDir = resolve(SCHEMAS_DIR, 'shared');
  const glob = new Bun.Glob('*.ts');

  for await (const file of glob.scan({ cwd: sharedDir })) {
    if (file.endsWith('.test.ts') || file.endsWith('.spec.ts') || file === 'index.ts')
      continue;
    sharedFiles.push(file.replace('.ts', ''));
  }

  return sharedFiles.sort();
}

function createExportEntry(distPath: string): ExportConditions {
  return {
    types: `${distPath}.d.ts`,
    bun: `${distPath}.js`,
    import: `${distPath}.js`,
    default: `${distPath}.js`,
  };
}

async function main(): Promise<void> {
  console.log('Updating package.json exports...\n');

  // Read current package.json
  const packageJson: PackageJson = await Bun.file(PACKAGE_JSON_PATH).json();

  // Get all schema files
  const schemaFiles = await getSchemaFiles();
  const sharedFiles = await getSharedSchemaFiles();

  console.log(`Found ${schemaFiles.length} event schemas`);
  console.log(`Found ${sharedFiles.length} shared schemas`);

  // Build new exports object
  const exports: PackageExports = {};

  // Add individual event schema exports
  for (const schema of schemaFiles) {
    exports[`./${schema}`] = createExportEntry(`./dist/schemas/${schema}`);
  }

  // Add shared schemas under ./shared/*
  for (const shared of sharedFiles) {
    exports[`./shared/${shared}`] = createExportEntry(`./dist/schemas/shared/${shared}`);
  }

  // Add fixtures export
  exports['./fixtures'] = createExportEntry('./dist/fixtures/index');
  // Add event types export
  exports['./event-types'] = createExportEntry('./dist/event-types');
  // Add schema registry export
  exports['./registry'] = createExportEntry('./dist/registry');

  // Update package.json
  packageJson.exports = exports;

  // Write updated package.json
  await Bun.write(PACKAGE_JSON_PATH, JSON.stringify(packageJson, null, 2) + '\n');

  console.log(`\nUpdated exports with ${Object.keys(exports).length} entry points`);

  // Run prettier on package.json
  console.log('Formatting package.json...');
  const proc = Bun.spawn(['bunx', 'prettier', '--write', PACKAGE_JSON_PATH], {
    cwd: ROOT_DIR,
    stdout: 'inherit',
    stderr: 'inherit',
  });
  await proc.exited;

  // Sort package.json
  console.log('Sorting package.json...');
  const sortProc = Bun.spawn(['bunx', 'sort-package-json', PACKAGE_JSON_PATH], {
    cwd: ROOT_DIR,
    stdout: 'inherit',
    stderr: 'inherit',
  });
  await sortProc.exited;

  console.log('\nDone!');
}

main().catch((error) => {
  console.error('Failed to update exports:', error);
  process.exit(1);
});
