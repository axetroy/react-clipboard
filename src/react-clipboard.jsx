/**
 * Created by yan on 16-1-20.
 */
import { Component, PropTypes } from 'react';
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
      <span
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
      </span>
    );
  }
}

export default ReactClipboard;
