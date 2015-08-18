ExtractTextPlugin = require "extract-text-webpack-plugin"
path = require "path"
webpack = require "webpack"

# isProduction = process.env.FRIG_ENV == "production"
isProduction = true

module.exports =
  entry:
    frig: "./src/javascripts/index.js"
    frigging_bootstrap: "./src/javascripts/frigging_bootstrap/index.js"
  devtool: "source-map"
  output:
    path: path.join(__dirname, "dist")
    filename: "[name].min.js"
    libraryTarget: "var"
    library: "[name]"
  externals:
    "react": "React"
    "frig/higher_order_components/boolean": "Frig.higherOrderComponents.Boolean"
    "frig/components/input": "Frig.components.Input"
    "frig/util": "Frig.util"
    # "whatwg-fetch/fetch.js": "fetch"
  resolve:
    root: [
      path.join(__dirname, "src", "javascripts")
      path.join(__dirname, "src", "stylesheets")
    ]
  module:
    loaders: [
      {
        test: /\.css$/
        loader: "style!css"
      }
      {
        test: /\.styl$/
        # loader: 'style-loader!css-loader!stylus-loader'
        loader: ExtractTextPlugin.extract(
          "style-loader",
          "css-loader!stylus-loader"
        )
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
  plugins: [
    new webpack.optimize.UglifyJsPlugin(minimize: isProduction),
    new ExtractTextPlugin("frigging_bootstrap.min.css")
  ]
