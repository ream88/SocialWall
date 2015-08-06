var webpack = require("webpack");


module.exports = {
  entry: ["./index.js"],
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel" },
      { test: /\.css$/, loader: "style!css!postcss" }
    ]
  },
  postcss: [
    require("autoprefixer-core")()
  ]
};
