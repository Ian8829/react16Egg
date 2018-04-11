import React, { Component } from 'react';
import './App.css';

const Aux = props => props.children;

const Fruits = () => [
  <Aux>
    <li key="1">Apple</li>
    <li key="2">Orange</li>
    <li key="3">Banana</li>
  </Aux>
];

class MoreFruits extends Component {
  render() {
    return [
      <li key="1">Strawberry</li>,
      <li key="2">Blueberry</li>,
    ];
  }
}

class MultipleElements extends Component {
  render() {
    return (
      <div>
        <ul>
          <Fruits/>
          <MoreFruits/>
        </ul>
      </div>
    )
  }
}

export default MultipleElements;