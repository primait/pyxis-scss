// Webpack uses this to work with directories
const path = require('path');
const StylelintPlugin = require('stylelint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const stylelintOptions = {
  configFile: '.stylelintrc',
  context: 'scss',
  emitError: true,
  emitWarning: true,
  failOnWarning: true,
  ignoreDisables: true,
  syntax: 'scss',
}

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    pyxis: './pyxis.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].bundle.js'
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        include: path.resolve(__dirname, 'src', 'scss'),
        use: [
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|svg|png|gif|ico|eot|ttf|woff2?)(\?v=\d+\.\d+\.\d+)?$/i,
        type: 'asset/resource',
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new StylelintPlugin(stylelintOptions),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, './'),
    },
    compress: true,
    port: 8080,
  },
};