const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');

// see https://webpack.js.org/plugins/mini-css-extract-plugin/#extracting-css-based-on-entry
const recursiveIssuer = (m, c) => {
  const issuer = m.issuer;

  if (issuer) {
    return recursiveIssuer(issuer, c);
  }

  const chunks = m._chunks;

  for (const chunk of chunks) {
    return chunk.name;
  }

  return false;
}

// CSS files to load into assets/css
const cssFiles = [
  {
    name : 'editor',
    path : './blocks/book-details/editor.css'
  },
  {
    name: 'style',
    path: './blocks/book-details/style.css'
  }
]

const entryPoints = {
  // default entry point (main JS file)
  'editor.blocks': './blocks/index.js'
}

// add cssFiles as entry points
cssFiles.map(cssFile => entryPoints[cssFile.name] = cssFile.path)

// set up empty cache groups object
const cacheGroups = {}

// add cssFiles to cache groups
cssFiles.map(cssFile => cacheGroups[cssFile.name] = {
  name: cssFile.name,
  test: (m,c,entry = cssFile.name) => m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
  chunks: 'all',
  enforce: true
})

module.exports = {
  entry: entryPoints,
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
    // remove erroneous JS files generated from CSS entry points
    new FixStyleOnlyEntriesPlugin(),

    // place extracted CSS files in assets/css directory
    new MiniCssExtractPlugin({
      filename: './assets/css/blocks.[name].css'
    })
  ]
};
