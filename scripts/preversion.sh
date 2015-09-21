#!/bin/bash -e
cd "$( dirname "${BASH_SOURCE[0]}" )"/..

rm -rf ./dist/*

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

