#!/bin/bash -e
cd "$( dirname "${BASH_SOURCE[0]}" )"/..

rm -rf ./dist/*

echo ""
echo "FRIG: COMPILING DEV RELEASE"
echo "======================================================="
./node_modules/webpack/bin/webpack.js --progress --bail

echo ""
echo "FRIG: COMPILING MINIFIED RELEASE"
echo "======================================================="
FRIG_MIN="minify" ./node_modules/webpack/bin/webpack.js --progress --bail
