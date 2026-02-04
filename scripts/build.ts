#!/usr/bin/env bun
/**
 * Build script using Bun.build to compile TypeScript to JavaScript
 * and generate TypeScript declaration files.
 */

import { rm } from 'node:fs/promises';
import { resolve } from 'node:path';

import chalk from 'chalk';

const ROOT_DIR = resolve(import.meta.dirname, '..');
const SRC_DIR = resolve(ROOT_DIR, 'src');
const DIST_DIR = resolve(ROOT_DIR, 'dist');

async function clean(): Promise<void> {
  console.log('Cleaning dist directory…');
  await rm(DIST_DIR, { recursive: true, force: true });
}

async function getEntrypoints(): Promise<string[]> {
  const entrypoints: string[] = [];

  // Add top-level entry points
  entrypoints.push(resolve(SRC_DIR, 'index.ts'));
  entrypoints.push(resolve(SRC_DIR, 'event-types.ts'));
  entrypoints.push(resolve(SRC_DIR, 'registry.ts'));

  // Add all schema files (excluding tests)
  const schemaGlob = new Bun.Glob('**/*.ts');
  for await (const file of schemaGlob.scan({
    cwd: resolve(SRC_DIR, 'schemas'),
    absolute: true,
  })) {
    if (!file.endsWith('.test.ts')) {
      entrypoints.push(file);
    }
  }

  const fixturesDir = resolve(SRC_DIR, 'fixtures');
  const fixturesGlob = new Bun.Glob('**/*.ts');
  for await (const file of fixturesGlob.scan({ cwd: fixturesDir, absolute: true })) {
    if (!file.endsWith('.test.ts')) {
      entrypoints.push(file);
    }
  }

  return entrypoints;
}

async function buildJavaScript(): Promise<void> {
  console.log(
    `Building ${chalk.bgYellow.black('JavaScript')} with ${chalk.bgBlue.black('Bun.build')}…`,
  );

  const entrypoints = await getEntrypoints();
  console.log('\t', `Found ${chalk.cyan(entrypoints.length)} entry points`);

  const result = await Bun.build({
    entrypoints,
    outdir: DIST_DIR,
    root: SRC_DIR,
    target: 'bun',
    format: 'esm',
    minify: true,
    sourcemap: 'external',
    splitting: true,
    external: ['zod'],
  });

  if (!result.success) {
    console.error(chalk.red('Build failed:'));
    for (const log of result.logs) {
      console.error(log);
    }
    process.exit(1);
  }

  console.log('\t', `Built ${chalk.green(result.outputs.length)} files`);
}

async function buildDeclarations(): Promise<void> {
  console.log('Generating TypeScript declarations…');

  const proc = Bun.spawn(
    [
      'bunx',
      'tsc',
      '--declaration',
      '--emitDeclarationOnly',
      '--outDir',
      DIST_DIR,
      '--project',
      resolve(ROOT_DIR, 'tsconfig.build.json'),
    ],
    {
      cwd: ROOT_DIR,
      stdout: 'inherit',
      stderr: 'inherit',
    },
  );

  const exitCode = await proc.exited;

  if (exitCode !== 0) {
    console.error(chalk.red('Declaration generation failed'));
    process.exit(1);
  }

  console.log('\t', chalk.green('Declarations generated successfully'));
}

async function main(): Promise<void> {
  const startTime = performance.now();

  console.log(chalk.blue('Starting build…'));

  await clean();
  await buildJavaScript();
  await buildDeclarations();

  const elapsed = ((performance.now() - startTime) / 1000).toFixed(2);
  console.log(`\nBuild completed in ${chalk.green(elapsed)}s`);
}

main().catch((error) => {
  console.error(chalk.red('Build failed:'), error);
  process.exit(1);
});
