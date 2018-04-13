import React, { Component, Fragment } from 'react';

function Fruits() {
  return (
    <Fragment>
      <li>Apple</li>
      <li>Orange</li>
      <li>Apple</li>
    </Fragment>
  )
}

export default class UseFragment extends Component {
  render() {
    return (
      <ul>
        <li>Peach</li>
        <li>Ananas</li>
        <Fruits />
      </ul>
    );
  }
}