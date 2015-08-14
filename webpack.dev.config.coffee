ExtractTextPlugin = require "extract-text-webpack-plugin"
path = require "path"

module.exports =
  entry: "./src/javascripts/frig/index.js"
  devtool: "inline-source-map"
  output:
    path: path.join(__dirname, "dist")
    filename: "frig.js"
    libraryTarget: "var"
    library: "Frig"
  externals:
    "react/addons": "React.addons"
    "react": "React"
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
    new ExtractTextPlugin("frig.css")
  ]
