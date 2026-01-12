#!/usr/bin/env bun
import { $ } from 'bun';

import {
  error,
  getStagedFiles,
  header,
  info,
  isContinuousIntegration,
  success,
  warning,
} from './utilities.ts';

if (isContinuousIntegration()) {
  info('Skipping hook in CI');
  process.exit(0);
}

header('Pre-commit checks');
let ok = true;

// 0) update exports to keep package.json in sync
info('Running update:exports…');
try {
  await $`bun run update:exports`;
  const packageStatus = await $`git status --porcelain -- package.json`.text();
  if (packageStatus.trim()) {
    info('Staging package.json after update:exports…');
    await $`git add package.json`;
  }
  success('update:exports completed');
} catch {
  error('update:exports failed');
  ok = false;
}

// 1) package/lock checks
const staged = await getStagedFiles();
if (staged.includes('package.json')) {
  info('package.json is staged');
  // Check if dependency fields changed (not just version/metadata)
  const diff = await $`git diff --cached --no-color -- package.json`.text();
  const hasDepsChange =
    diff.includes('"dependencies"') ||
    diff.includes('"devDependencies"') ||
    diff.includes('"peerDependencies"') ||
    diff.includes('"optionalDependencies"');

  if (hasDepsChange && !staged.includes('bun.lock')) {
    warning('bun.lock is not staged');
    info('Run bun install and stage bun.lock');
    ok = false;
  } else if (staged.includes('bun.lock')) {
    info('Dependencies changed, installing…');
    try {
      await $`bun install`;
      success('Dependencies installed');
    } catch {
      warning('bun install failed; run it manually');
    }
  }
}

// 2) lint:fix
info('Running lint:fix…');
try {
  await $`bun run lint:fix`;
  success('lint:fix passed');
} catch {
  error('lint:fix failed');
  ok = false;
}

// 3) typecheck
info('Running typecheck…');
try {
  await $`bun run typecheck`;
  success('typecheck passed');
} catch {
  error('typecheck failed');
  ok = false;
}

// 4) test
info('Running test…');
try {
  await $`bun run test`;
  success('test passed');
} catch {
  error('test failed');
  ok = false;
}

// 5) lint-staged (format staged files; always last)
info('Running lint-staged…');
try {
  await $`bun exec lint-staged`;
  success('Lint-staged passed');
} catch {
  error('Lint-staged failed');
  ok = false;
}

if (!ok) {
  error('Pre-commit checks failed');
  process.exit(1);
}

success('All pre-commit checks passed');

process.exit(0);
