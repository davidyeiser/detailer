const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Set different CSS extraction for editor only and common block styles
// const blocksCSSPlugin = new MiniCssExtractPlugin({
//   filename: './assets/css/blocks.style.css'
// });
// const editBlocksCSSPlugin = new MiniCssExtractPlugin({
//   filename: './assets/css/blocks.editor.css'
// });

function recursiveIssuer(m, c) {
  const issuer = m.issuer;
  // For webpack@4 chunks =

  if (issuer) {
    return recursiveIssuer(issuer, c);
  }

  const chunks = m._chunks;
  // For webpack@4 chunks = m._chunks

  for (const chunk of chunks) {
    return chunk.name;
  }

  return false;
}

const cssFiles = [
  {
    name : 'blocks.editor.css',
    path : './assets/css/blocks.editor.css'
  },
  {
    name: 'blocks.style.css',
    path: './assets/css/blocks.style.css'
  }
]

const entryPoints = {
  // main JS file
  'editor.blocks': './blocks/index.js',

  // editor-specific block CSS
  'blocks.editor.css': './assets/css/blocks.editor.css',

  // public-facing block CSS
  'blocks.style.css': './assets/css/blocks.style.css'
}

const cacheGroups = {
  'blocks.editor.css': {
    name: 'blocks.editor.css',
    test: (m,c,entry = 'blocks.editor.css') => m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
    chunks: 'all',
    enforce: true
  },
  'blocks.style.css': {
    name: 'blocks.style.css',
    test: (m,c,entry = 'blocks.style.css') => m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
    chunks: 'all',
    enforce: true
  }
}
// {
//   "scss" : [
//     { // entryPoint
//       "path" : "assets/scss/styles-red.scss",
//       "name" : "styles-red",
//       "primary" : true
//     },
//     {
//       "path" : "assets/scss/styles-light-blue.scss",
//       "name" : "styles-light-blue",
//       "primary" : false
//     }
//   ]
// }
// config.scss.forEach(entryPoint => {
//   cacheGroups[entryPoint.name] = {
//     name: entryPoint.name,
//     test: (m,c,entry = entryPoint.name) => m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
//     chunks: 'all',
//     enforce: true
//   }
// });

module.exports = {
  entry: {
    'editor.blocks': './blocks/index.js',
  },
  output: {
    path: path.resolve(__dirname),
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
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [ require('autoprefixer') ]
              }
            }
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: cacheGroups
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: ({ chunk }) => `${chunk.name}.css`,
    })
  ]
};
