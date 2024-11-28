import { join } from 'path';

import { countESLintError, logError, logInfo, logSuccess } from './utils.mjs';

const testDir = join(process.cwd(), 'src', '__tests__');

const testConfigs = [
  {
    eslintFilePath: `${testDir}/eslint.config.js`,
    good: 0,
    bad: 16,
    filePattern: '{js,ts}',
  },
  {
    eslintFilePath: `${testDir}/eslint.react.js`,
    good: 6,
    bad: 28,
    filePattern: '{js,ts,jsx,tsx}',
  },
  {
    eslintFilePath: `${testDir}/.eslintrc.next.js`,
    good: 0,
    bad: 28,
    filePattern: '{js,ts,jsx,tsx}',
  },
];

let isSuccess = true;

testConfigs.forEach((testConfig) => {
  logInfo(`Run bad test cases with config from ${testConfig.eslintFilePath}`);
  logInfo(`Expect to see ${testConfig.bad} ESLint errors`);

  let errorCount = countESLintError(
    testConfig.eslintFilePath,
    testConfig.filePattern,
    'bad',
  );

  if (errorCount !== testConfig.bad) {
    logError(
      `Expected ${testConfig.bad} but got ${errorCount} linting errors for badly formatted files`,
    );
    isSuccess = false;
  } else {
    logSuccess('ESLint rules passed');
  }

  logInfo(`Run good test cases with config from ${testConfig.eslintFilePath}`);
  logInfo(`Expect to see ${testConfig.good} ESLint errors`);

  errorCount = countESLintError(
    testConfig.eslintFilePath,
    testConfig.filePattern,
    'good',
  );

  if (errorCount !== testConfig.good) {
    logError(
      `Expected ${testConfig.good} but got ${errorCount} linting errors for well formatted files`,
    );
    isSuccess = false;
  } else {
    logSuccess('ESLint rules passed');
  }
});

if (!isSuccess) {
  process.exit(1);
}
