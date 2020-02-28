const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Set different CSS extraction for editor only and common block styles
const blocksCSSPlugin = new MiniCssExtractPlugin({
  filename: './assets/css/blocks.style.css'
});
const editBlocksCSSPlugin = new MiniCssExtractPlugin({
  filename: './assets/css/blocks.editor.css'
});

module.exports = {
  entry: {
    'editor.blocks': './blocks/index.js',
  },
  output: {
    path: path.resolve( __dirname ),
    filename: './assets/js/[name].js'
  },
  watch: 'production' !== process.env.NODE_ENV,
  devtool: 'cheap-eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /style.css$/,
        use: [
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [ require('autoprefixer') ]
            }
          }
        ]
      },
      {
        test: /editor.css$/,
        use: [
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [ require('autoprefixer') ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    blocksCSSPlugin,
    editBlocksCSSPlugin
  ]
};
