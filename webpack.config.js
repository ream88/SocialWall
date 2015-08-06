var webpack = require("webpack");

var definePlugin = new webpack.DefinePlugin({
  CLIENT_ID: JSON.stringify(process.env.CLIENT_ID)
});

module.exports = {
  entry: ["./index.js"],
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel?stage=0" },
      { test: /\.css$/, loader: "style!css!postcss" }
    ]
  },
  postcss: [
    require("autoprefixer-core")()
  ],
  plugins: [
    definePlugin
  ]
};
