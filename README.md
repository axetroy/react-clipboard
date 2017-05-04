# react-clipboard

[![Greenkeeper badge](https://badges.greenkeeper.io/axetroy/react-clipboard.svg)](https://greenkeeper.io/)

[clipboard](https://github.com/zenorocha/clipboard.js) wrapper component for react

## Install

```bash
npm install @axetroy/react-clipboard
```

## Usage

```javascript
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
```

## Props

- value: string

    any string you want to copy

- onSuccess: function

    success callback

- onError: function

    error callback
