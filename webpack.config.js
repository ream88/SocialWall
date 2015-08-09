var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  entry: ["./index.js"],
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader") },
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel?stage=0&loose[]=es6.modules&loose[]=es6.classes" }
    ]
  },
  postcss: [
    require("autoprefixer-core")(),
    require("postcss-calc")(),
    require("postcss-color-function")(),
    require("postcss-custom-properties")()
  ],
  plugins: [
    new ExtractTextPlugin("style.css", { allChunks: true }),
    new webpack.DefinePlugin({
      CLIENT_ID: JSON.stringify(process.env.CLIENT_ID),
      INTERVAL: process.env.INTERVAL || 5,
      HASHTAG: JSON.stringify(process.env.HASHTAG)
    })
  ]
};
