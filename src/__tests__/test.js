const { join } = require('path');

const { countESLintError, logError, logInfo, logSuccess } = require('./utils');

const testDir = join(process.cwd(), 'src', '__tests__');

const testConfigs = [
  {
    eslintFilePath: `${testDir}/.eslintrc.js`,
    good: 0,
    bad: 21,
    filePattern: '{js,ts}',
  },
  {
    eslintFilePath: `${testDir}/.eslintrc.react.js`,
    good: 6,
    bad: 33,
    filePattern: '{js,ts,jsx,tsx}',
  },
  {
    eslintFilePath: `${testDir}/.eslintrc.next.js`,
    good: 0,
    bad: 33,
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
    'bad'
  );

  if (errorCount !== testConfig.bad) {
    logError(
      `Expected ${testConfig.bad} but got ${errorCount} linting errors for badly formatted files`
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
    'good'
  );

  if (errorCount !== testConfig.good) {
    logError(
      `Expected ${testConfig.good} but got ${errorCount} linting errors for well formatted files`
    );
    isSuccess = false;
  } else {
    logSuccess('ESLint rules passed');
  }
});

if (!isSuccess) {
  process.exit(1);
}
