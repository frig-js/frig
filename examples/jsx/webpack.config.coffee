path = require "path"

module.exports =
  entry: "./example.jsx"
  output:
    path: path.join(__dirname, "..", "..", "dist", "examples", "jsx")
    filename: "example.js"
  resolve:
    root: [
      path.join(__dirname)
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
      {
          test: /\.jsx$/,
          loader: 'jsx-loader?insertPragma=React.DOM&harmony'
      }
    ]
