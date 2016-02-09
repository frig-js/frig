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
  relativePath = [name, name].join("/")
  entry["#{exPath}#{relativePath}"] = "./examples/#{relativePath}.jsx"
  # Copy the html outside of webpack
  return unless isProduction
  htmlSrc = "./examples/#{name}/index.html"
  htmlDest = "./dist/examples/#{name}/index.html"
  mkpath.sync path.dirname htmlDest
  fsExtra.copySync htmlSrc, htmlDest

example "kitchen-sink"
example "horizontal-login"
example "the-basics"
example "two-way-data-binding"
example "component-functions"

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

externals = {}

if isProduction and mode == "examples"
  externals = _.merge externals,
    "frig": "Frig"
    "frigging-bootstrap": "FriggingBootstrap"
    "react": {
      root: "React"
      this: "React"
      var: "React"
      commonjs: "react"
      commonjs2: "react"
      amd: "react"
    }
    "react-dom": {
      root: "ReactDOM"
      this: "ReactDOM"
      var: "ReactDOM"
      commonjs: "react-dom"
      commonjs2: "react-dom"
      amd: "react-dom"
    }

alias = if isProduction
  {}
else
  "react": path.resolve('./node_modules/react')
  "react-dom": path.resolve('./node_modules/react-dom')
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
