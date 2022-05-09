#!/usr/bin/env bash

${PWD}/src/__tests__/testRunner.sh -c ${PWD}/src/__tests__/.eslintrc.js -g 0 -b 15
${PWD}/src/__tests__/testRunner.sh -c ${PWD}/src/__tests__/.eslintrc.react.js -g 0 -b 17
${PWD}/src/__tests__/testRunner.sh -c ${PWD}/src/__tests__/.eslintrc.next.js -g 0 -b 17
