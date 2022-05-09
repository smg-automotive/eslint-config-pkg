import chalk from 'chalk';
import { spawnSync } from 'child_process';

const log = console.log;

export const logInfo = (message: string) => log(chalk.green('info'), message);

export const logSuccess = (message: string) =>
  log(chalk.bgGreen.whiteBright('info'), message);

export const logError = (message: string) => log(chalk.red('error'), message);

export const countESLintError = (
  eslintFilePath: string,
  filePattern: string,
  testType: 'good' | 'bad' = 'bad'
) => {
  const spawn = spawnSync(
    'npx eslint',
    [
      `--config ${eslintFilePath}`,
      '--format json',
      `"src/__tests__/${testType}/**/*.${filePattern}"`,
    ],
    { shell: true, encoding: 'utf-8' }
  );

  const response = JSON.parse(spawn.stdout);

  return response.reduce((p, c) => p + c.errorCount, 0);
};
