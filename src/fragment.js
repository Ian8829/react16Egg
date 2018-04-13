import React, { Component } from 'react';

function Fruits() {
  return [
    <li key="1">Apple</li>,
    <li key="2">Orange</li>,
    <li key="3">Apple</li>
  ]
}

export default class Fragment extends Component {
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