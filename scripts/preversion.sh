#!/bin/bash -e
cd "$( dirname "${BASH_SOURCE[0]}" )"/..

rm -rf ./dist/*

VERSION=`npm version|grep -e "frig: '[0-9\.]*"|grep -E [0-9\.]+|grep -oE "[0-9\.]+"`
bower version $VERSION
git add bower.json

echo ""
echo "FRIG: COMPILING EXAMPLES"
echo "======================================================="
FRIG_ENV="production" FRIG_MODE="examples" webpack --progress --bail

echo ""
echo "FRIG: COMPILING DEV RELEASE"
echo "======================================================="
FRIG_ENV="production" FRIG_MODE="core" webpack --progress --bail

echo ""
echo "FRIG: COMPILING MINIFIED RELEASE"
echo "======================================================="
FRIG_ENV="production" FRIG_MIN="minify" FRIG_MODE="core" webpack --progress --bail
