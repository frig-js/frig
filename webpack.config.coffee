ExtractTextPlugin = require "extract-text-webpack-plugin"
path = require "path"
webpack = require "webpack"
_ = require "lodash"
mkpath = require 'mkpath'
fsExtra = require "fs-extra"

isProduction = process.env.FRIG_ENV == "production"
minify = process.env.FRIG_MIN == "minify"
mode = process.env.FRIG_MODE || "examples"

entry = {}

example = (name, type) ->
  return if mode != "examples"
  exPath = if isProduction then "examples/" else ""
  relativePath = [name, type, name].join("/")
  ext = if type == "jsx" then "jsx" else "coffee"
  entry["#{exPath}#{relativePath}"] = "./examples/#{relativePath}.#{ext}"
  # Copy the html outside of webpack
  return unless isProduction
  htmlSrc = "./examples/#{relativePath}.html"
  htmlDest = "./dist/examples/#{relativePath}.html"
  mkpath.sync path.dirname htmlDest
  fsExtra.copySync htmlSrc, htmlDest

example "kitchen-sink", "jsx"
example "kitchen-sink", "coffeescript"
example "horizontal-login", "coffeescript"
example "the-basics", "jsx"
example "two-way-data-binding", "jsx"
example "component-functions", "jsx"

if isProduction and mode != "examples"
  entry = _.merge entry,
    "frig": "./src/javascripts/index.js"

if isProduction and mode != "examples" and minify
  plugins = [new webpack.optimize.UglifyJsPlugin(minimize: true)]
else
  plugins = []

output =
  path: if isProduction then "./dist" else "./examples"
  filename: "[name]#{if minify then ".min.js" else ".js"}"

externals =
  "react": {
    root: "React"
    this: "React"
    var: "React"
    commonjs: "react"
    commonjs2: "react"
    amd: "react"
  }
  # react/addons is required for the examples
  "react/addons": {
    root: "React"
    this: "React"
    var: "React"
    commonjs: "react"
    commonjs2: "react"
    amd: "react"
  }

if isProduction and mode == "examples"
  externals = _.merge externals,
    "frig": "Frig"
    "frigging-bootstrap": "FriggingBootstrap"

alias = if isProduction
  {}
else
  "frig": path.join __dirname, "src/javascripts/"
  "frigging-bootstrap": path.join __dirname, "node_modules/frigging-bootstrap/src/javascripts/"

if isProduction and mode != "examples"
  output = _.merge output,
    libraryTarget: "umd"
    library: "Frig"

devtool =
  if isProduction
    undefined
  else
    "inline-source-map"

module.exports =
  entry: entry
  devtool: devtool
  output: output
  externals: externals
  resolve:
    root: [
      path.join(__dirname, "src", "javascripts")
      path.join(__dirname, "src", "stylesheets")
    ]
    alias: alias
  devServer:
    contentBase: "./examples",
  module:
    loaders: [
      if isProduction
        test: /\.styl$/
        loader: ExtractTextPlugin.extract(
          "style-loader",
          "css-loader!stylus-loader"
        )
      else
        test: /\.styl$/
        loader: "style-loader!css-loader!stylus-loader"
      {
        test: /\.coffee$/
        loader: "coffee"
      }
      {
        test: /\.jsx?$/
        exclude: /^(node_modules|dist|scripts)/
        loader: "babel?stage=0"
      }
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        loader: "url-loader"
      }
    ]
  plugins: plugins
