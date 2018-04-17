import React, { Component, createRef } from "react";
import TextInput from "./TextInput";

class App extends Component {
  inputRef = createRef();

  componentDidMount() {
    console.log(this.inputRef.current);
  }

  render() {
    return <TextInput inputRef={this.inputRef} />
  }
}

export default App;