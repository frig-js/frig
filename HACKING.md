## Dev Setup
1. `git clone git@github.com:frig-js/frig.git`
2. `git clone git@github.com:frig-js/frigging-bootstrap.git`
3. npm install: `cd frigging-bootstrap; npm install; cd ../frig; npm install; cd ..`
3. npm link FriggingBootstrap to Frig: `cd frigging-bootstrap; npm link; cd ../frig; npm link frigging-bootstrap`
4. Install mkdocs from http://www.mkdocs.org/

## Running the examples (for debugging)
3. Run `npm start`
4. Run `mkdocs serve`
5. Go to http://localhost:8080/webpack-dev-server/ to view examples
6. Go to http://localhost:8000/ to view docs

## Npm Link (Debugging Frigging Bootstrap)

It is useful to `npm link` frigging-bootstrap if you are working on it so that both frig and frigging-bootstrap can be developed using the frig examples.

## Notes on Webpack

Never run `webpack` directly as it will generate a bunch of files in the examples and release directories (`webpack-dev-server` is cool though, it doesn't save anything to disk).

If you do accidentally run webpack you can get rid of all the files it generates by running `git clean -f -X`

## Releasing a new version of Frig

`npm version` is the official way to compile a release. Npm will not publish a new version to npm and bower and push an updated copy of the docs. See https://docs.npmjs.com/cli/version

If you just need to update the docs without releasing a new version you can run `./scripts/publish_docs.sh`

DO NOT compile a release if you want your pull request to be accepted. If you do compile a release you will need to remove it and re-submit your pull request. This is to prevent the Git repo from becoming massive and/or crazy-slow to download.
