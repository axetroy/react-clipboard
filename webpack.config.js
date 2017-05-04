var path = require('path');

module.exports = {
  entry: path.join(__dirname, 'example', 'src', 'index.jsx'),
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel',
        include: [path.join(__dirname, 'example')]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'example')
  }
};

import { Component } from 'react';
import ReactClipboard from '@axetroy/react-clipboard';

class App extends Component {
  render() {
    return (
      <div>
        <ReactClipboard
          value={'you will copy me!'}
          onSuccess={() => {
            console.log('copy success');
          }}
          onError={() => {
            console.error('copy error');
          }}
        >
          <input type="button" value="Click me & copy that." />
        </ReactClipboard>
      </div>
    );
  }
}
