# react-clipboard

[clipboard](https://github.com/zenorocha/clipboard.js) wrapper component for react

[Online demo](https://axetroy.github.io/react-clipboard/)

## Install

```bash
yarn add react          # requirement
yarn add clipboard      # requirement
yarn add @axetroy/react-clipboard
```

## Usage

```javascript
import { Component } from "react";
import ReactClipboard from "@axetroy/react-clipboard";

class App extends Component {
  render() {
    return (
      <div>
        <ReactClipboard
          value={"you will copy me!"}
          onSuccess={() => {
            console.log("copy success");
          }}
          onError={() => {
            console.error("copy error");
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

* value: string

  any string you want to copy

* onSuccess: function

  success callback

* onError: function

  error callback

## Run the Demo

```bash
git clone https://github.com/axetroy/react-clipboard.git
yarn
yarn start
```

### License

The [MIT License](https://github.com/axetroy/react-clipboard/blob/master/LICENSE)
