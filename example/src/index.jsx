import React from 'react';
import { render } from 'react-dom';
import ReactClipboard from '../../lib/react-clipboard';

const element = document.createElement('div');
document.body.appendChild(element);
render(
  <div>
    hello world
    <ReactClipboard
      style={{ display: 'block' }}
      value={'you will copy me!'}
      onSuccess={() => {
        alert('copy success');
      }}
      onError={() => {
        alert('copy error');
      }}
    >
      <input type="button" value="Click me & copy that." />
    </ReactClipboard>
  </div>,
  element
);
