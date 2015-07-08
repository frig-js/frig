ExtractTextPlugin = require "extract-text-webpack-plugin"
path = require "path"

module.exports =
  entry:
    # jsx: "./examples/jsx/example.jsx"
    coffeescript: "./examples/coffeescript/example.coffee"
  devtool: "inline-source-map"
  output:
    filename: "./dist/examples/[name]/example.js"
  resolve:
    alias:
      frig: path.join(__dirname, "src", "javascripts", "frig.coffee")
  module:
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
          test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
          loader: "url-loader"
      }
    ]