import React, { Component } from 'react';
import BarChart from './barChart';

function FunctionalComponent() {
  let inputRef = React.createRef();

  function focus() {
    inputRef.current.focus();
  }

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={focus}>Focus</button>
    </div>
  )
}

class Bar extends Component {
  render() {
    return (
      <div>
        <FunctionalComponent />
      </div>
    )
  }
}

export default Bar;