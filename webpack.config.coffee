path = require("path")
module.exports =
  entry: "./src/javascripts/frig.coffee"
  output:
    path: path.join(__dirname, "bin"),
    filename: "frig.js"
  resolve:
    root: [path.join(__dirname, "bower_components")]
  module:
    loaders: [
      {
        test: /\.css$/
        loader: "style!css"
      }
      {
        test: /\.styl$/
        loader: 'style-loader!css-loader!stylus-loader'
      }
      {
        test: /\.coffee$/
        loader: "babel!coffee"
      }
    ]
