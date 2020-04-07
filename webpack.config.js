/*
 * @Author: willa
 * @Date: 2020-04-07 15:09:43
 * @LastEditTime: 2020-04-07 17:11:09
 * @LastEditors: willa
 * @Description:
 * @FilePath: /demo/webpack.config.js
 */

const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          },
        },
      },
    ],
  },
};
