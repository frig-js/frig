ExtractTextPlugin = require "extract-text-webpack-plugin"
path = require "path"

module.exports =
  entry:
    # frig: "./src/javascripts/frig.js"
    jsx: "./examples/jsx/example.jsx"
    coffeescript: "./examples/coffeescript/example.coffee"
  devtool: "inline-source-map"
  output:
    filename: "./dist/examples/[name]/example.js"
  resolve:
    alias:
      frig: path.join(__dirname, "src", "javascripts", "frig")
      frigging_bootstrap: path.join(
        __dirname, "src", "javascripts", "frigging_bootstrap"
      )
  eslint: {
    failOnError: true
  }
  module:
    preLoaders: [
      {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/}
    ]
    loaders: [
      {
        test: /\.css$/
        loader: "style!css"
      }
      {
        test: /\.styl$/
        loader: "style-loader!css-loader!stylus-loader"
      }
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