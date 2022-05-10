import { cwd, exit } from 'process';
import { join } from 'path';

import { countESLintError, logError, logInfo, logSuccess } from './utils';

const testDir = join(cwd(), 'src', '__tests__');

interface TestConfig {
  eslintFilePath: string;
  good: number;
  bad: number;
  filePattern: string;
}

const testConfigs: TestConfig[] = [
  {
    eslintFilePath: `${testDir}/.eslintrc.js`,
    good: 0,
    bad: 15,
    filePattern: '{js,ts}',
  },
  {
    eslintFilePath: `${testDir}/.eslintrc.react.js`,
    good: 0,
    bad: 23,
    filePattern: '{js,ts,jsx,tsx}',
  },
  {
    eslintFilePath: `${testDir}/.eslintrc.next.js`,
    good: 0,
    bad: 21,
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
  exit(1);
}
