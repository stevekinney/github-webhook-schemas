#!/usr/bin/env bun
import path from 'node:path';

import chalk from 'chalk';
import { kebabCase } from 'change-case';

const cwd = process.cwd();
const directoryName = path.basename(cwd);
const packagePath = path.join(cwd, 'package.json');

const projectName = kebabCase(directoryName.replace(/^\.+/, '') || 'project-name');

try {
  const raw = await Bun.file(packagePath).text();
  const pkg = JSON.parse(raw);

  if (pkg.name !== projectName) {
    pkg.name = projectName;
    await Bun.write(packagePath, JSON.stringify(pkg, null, 2) + '\n');
    console.log(chalk.green(`Updated package name to "${projectName}".`));
  } else {
    console.log(chalk.gray('Package name already up to date.'));
  }
} catch (err) {
  console.error(chalk.red('Failed to update package name:'), err);
  process.exit(1);
}
