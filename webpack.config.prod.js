const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'react-clipboard.jsx'),
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'react-clipboard.js',
    libraryTarget: 'umd'
  },
  externals: {
    react: 'react',
    clipboard: 'clipboard',
    "prop-types": 'prop-types'
  },
  module: {
    loaders: [
      {
        test: /\.(jsx|js)?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'example')
  }
};
