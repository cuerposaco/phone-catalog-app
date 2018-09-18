const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/dist/'
  },
  module: {
    rules: [
      // Babel con
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                includePaths: ['./src/styles', 'node_modules']
              }
            },
          ]
        }),
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin(
      { filename: 'styles.css' }
    ),
  ],
  devServer: {
    port: process.env.WEBPACK_PORT || 8001,
  },
};