ExtractTextPlugin = require "extract-text-webpack-plugin"
path = require "path"
webpack = require "webpack"
_ = require "lodash"
mkpath = require 'mkpath'
fsExtra = require "fs-extra"

minify = process.env.FRIG_MIN == "minify"

module.exports =
  entry:
    "frig": "./src/index.js"
  devtool: undefined
  externals:
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
  output:
    path: "./dist"
    filename: "[name]#{if minify then ".min.js" else ".js"}"
    libraryTarget: "umd"
    library: "Frig"
  resolve:
    root: [
      path.join(__dirname, "src")
    ]
  module:
    loaders: [
      {
        test: /\.jsx?$/
        exclude: /^(node_modules|dist|scripts)/
        loader: "babel?stage=0"
      }
    ]
  plugins: [
    new webpack.optimize.UglifyJsPlugin(minimize: true)
  ]
