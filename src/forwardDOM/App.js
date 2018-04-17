import React, { Component, createRef, Fragment } from "react";
import TextInput from "./TextInput";

class App extends Component {
  inputRef = createRef();

  focusInput = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <Fragment>
        <TextInput ref={this.inputRef} />
        <button onClick={this.focusInput}>Focus</button>
      </Fragment>
    )
  }
}

export default App;