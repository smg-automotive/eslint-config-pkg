import { spawnSync } from 'child_process';
import chalk from 'chalk';

/* eslint-disable no-console */
const log = console.log;

export const logInfo = (message) => log(chalk.green('info'), message);

export const logSuccess = (message) =>
  log(chalk.bgGreen.whiteBright('info'), message);

export const logError = (message) => log(chalk.red('error'), message);

export const countESLintError = (eslintFilePath, filePattern, testType) => {
  const spawn = spawnSync(
    // eslint-disable-next-line sonarjs/no-os-command-from-path
    'npx eslint',
    [
      `--config ${eslintFilePath}`,
      `"src/__tests__/${testType}/**/*.${filePattern}"`,
      '--format json',
    ],
    { shell: true, encoding: 'utf-8' },
  );

  if (!spawn.stdout.length) {
    throw spawn.stderr;
  }

  const response = JSON.parse(spawn.stdout);

  return response.reduce((p, c) => p + c.errorCount, 0);
};
