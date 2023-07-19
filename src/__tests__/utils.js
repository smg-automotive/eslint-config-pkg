const { spawnSync } = require('child_process');
const chalk = require('chalk');

/* eslint-disable no-console */
const log = console.log;

const logInfo = (message) => log(chalk.green('info'), message);

const logSuccess = (message) => log(chalk.bgGreen.whiteBright('info'), message);

const logError = (message) => log(chalk.red('error'), message);

const countESLintError = (eslintFilePath, filePattern, testType) => {
  const spawn = spawnSync(
    'npx eslint',
    [
      `--config ${eslintFilePath}`,
      `"src/__tests__/${testType}/**/*.${filePattern}"`,
      '--format json',
    ],
    { shell: true, encoding: 'utf-8' },
  );

  const response = JSON.parse(spawn.stdout);

  return response.reduce((p, c) => p + c.errorCount, 0);
};

module.exports = {
  logInfo,
  logSuccess,
  logError,
  countESLintError,
};
