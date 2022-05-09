#!/usr/bin/env bash

while getopts c:g:b: option
do
case "${option}"
in
c) CONFIG=${OPTARG};;
g) good_expected=${OPTARG};;
b) bad_expected=${OPTARG};;
esac
done

bad_output=$(npx eslint --config ${CONFIG} --format json "src/__tests__/bad/**/*")
echo "Bad Test Cases:"
echo -n $bad_output | npx jq .

bad_failures=$(echo $bad_output | npx jq ". | map(.errorCount) | add")

if [ "$bad_failures" != "$bad_expected" ]; then
  echo "Expected $bad_expected but got $bad_failures linting errors for badly formatted files"
  exit 1
fi


good_output=$(npx eslint --format json "src/__tests__/good/**/*")
echo "Good Test Cases:"
echo -n $good_output | npx jq .

good_failures=$(echo $good_output | npx jq ". | map(.errorCount) | add")

if [ "$good_failures" != "$good_expected" ]; then
  echo -n "Expected $good_expected with CONFIG: ${CONFIG} but got $good_failures linting errors for well formatted files"
  exit 1
fi
