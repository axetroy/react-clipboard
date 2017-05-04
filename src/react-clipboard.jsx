import React, { Component, PropTypes } from 'react';
import Clipboard from 'clipboard';

class ReactClipboard extends Component {
  PropTypes = {
    value: PropTypes.string,
    onSuccess: PropTypes.func,
    onError: PropTypes.func
  };

  componentWillUnmount() {
    this.__Clipboard && this.__Clipboard.destroy();
  }

  render() {
    return (
      <div
        className={
          'react-clipboard-wrapper' +
            (this.props.className ? ' ' + this.props.className : '')
        }
        style={{ display: 'inline-block', ...this.props.style }}
        ref={dom => {
          if (dom && !this.__Clipboard) {
            let clipboard = (this.__Clipboard = new Clipboard(dom, {
              text: () => this.props.value
            }));

            clipboard.on('success', event => {
              if (typeof this.props.onSuccess === 'function') {
                this.props.onSuccess(event);
              }
            });

            clipboard.on('error', event => {
              if (typeof this.props.onError === 'function') {
                this.props.onError(event);
              }
            });
          }
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default ReactClipboard;
