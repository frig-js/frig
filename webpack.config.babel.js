import path from "path"
import webpack from "webpack"

const minify = process.env.FRIG_MIN === "minify"
const plugins = []

if (minify) {
  plugins.unshift(new webpack.optimize.UglifyJsPlugin({
    minimize: true,
  }))
}

module.exports = {
  entry: {
    frig: "./src/index.js",
  },
  devtool: void 0,
  externals: {
    react: {
      root: "React",
      this: "React",
      var: "React",
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
    },
    "react-dom": {
      root: "ReactDOM",
      this: "ReactDOM",
      var: "ReactDOM",
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "react-dom",
    },
  },
  output: {
    path: "./dist",
    filename: `[name]${minify ? ".min.js" : ".js"}`,
    libraryTarget: "umd",
    library: "Frig",
  },
  resolve: {
    root: [path.join(__dirname, "src")],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /^(node_modules|dist|scripts)/,
        loader: "babel",
        query: {
          presets: ["es2015", "react", "stage-1"],
          plugins: ["babel-plugin-transform-decorators-legacy"],
        },
      },
    ],
  },
  plugins,
}
