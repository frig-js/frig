path = require "path"

module.exports =
  entry: "./example.coffee"
  output:
    path: path.join(__dirname, "..", "..", "dist", "examples", "coffeescript")
    filename: "example.js"
  resolve:
    root: [
      path.join(__dirname)
      path.join(__dirname, "bower_components")
      path.join(__dirname, "..", "..", "src", "javascripts")
      path.join(__dirname, "..", "..", "src", "stylesheets")
    ]
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
