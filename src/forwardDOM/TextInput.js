import React, { Component, createRef } from "react";

class TextInput extends Component {
  inputRef = createRef();

  focus = () => {
    this.inputRef.current.focus();
  };

  render() {
    return <input ref={this.inputRef} />
  }
}

export default TextInput;