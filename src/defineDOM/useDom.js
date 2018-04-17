import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Foo {
  toString() {
    return 'foo';
  }
}

const foo = new Foo();

class Rd extends Component {
  render() {
    return (
      <div className={foo}>
        Hello!
      </div>
    );
  }
}

export default Rd;