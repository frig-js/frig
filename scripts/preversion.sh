#!/bin/bash -e

echo ""
echo "COMPILING EXAMPLES"
echo "======================================================="
FRIG_ENV="production" FRIG_MODE="examples" webpack --progress

echo ""
echo "COMPILING DEV RELEASE"
echo "======================================================="
FRIG_ENV="production" FRIG_MODE="core" webpack --progress

echo ""
echo "COMPILING MINIFIED RELEASE"
echo "======================================================="
FRIG_ENV="production" FRIG_MIN="minify" FRIG_MODE="core" webpack --progress
