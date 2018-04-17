import React, { Component, createRef } from "react";
import logProps from "./logProps";

class TextInput extends Component {
  inputRef = createRef();

  focus = () => {
    this.inputRef.current.focus();
  };

  render() {
    return <input ref={this.inputRef} />
  }
}

export default logProps(TextInput);