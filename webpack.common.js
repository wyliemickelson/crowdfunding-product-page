const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: "./src/js/index.js",
  plugins: [new HtmlWebpackPlugin({
    template: "./src/template.html"
  })],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
}