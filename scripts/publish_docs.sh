#!/bin/bash -e

if [[ -z $(git status -s) ]]
then
  cp ./node_modules/frigging-bootstrap/dist/frigging-bootstrap.js ./dist/frigging-bootstrap.js
  mkdocs gh-deploy
  git add -A
  git reset --hard
else
  echo "Publish Cancelled: Please commit your changes before publishing."
  exit 1
fi