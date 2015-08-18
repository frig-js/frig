## Running the examples (for debugging)
1. Install webpack-dev-server
2. Install mkdocs
3. Run `webpack-dev-server`
4. Run `cd docs; mkdocs serve`
5. Go to http://localhost:8080/webpack-dev-server/ to view examples
6. Go to http://localhost:8000/ to view docs

## Npm Link (Debugging Frigging Bootstrap)

It may be useful to `npm link` frigging-bootstrap if you are working on it so that both frig and frigging-bootstrap can be developed using the frig examples.

## Notes on Webpack

Never run `webpack` directly as it will generate a bunch of files in the examples and release directories (`webpack-dev-server` is cool though, it doesn't save anything to disk).

If you do accidentally run webpack you can get rid of all the files it generates by running `git clean -f -X`

## Releasing a new version of Frig

`npm version` is the official way to compile a release. See https://docs.npmjs.com/cli/version

DO NOT compile a release if you want your pull request to be accepted. If you do compile a release you will need to remove it and re-submit your pull request. This is to prevent the Git repo from becoming massive and/or crazy-slow to download.
