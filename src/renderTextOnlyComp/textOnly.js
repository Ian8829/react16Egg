import React, { Component } from 'react';
import '../App.css';

const Comment = ({ text }) => {
  const emojifixedText = text
    .replace(':)', '😄')
    .replace(':D', '😁')
    .replace(':(', '😛');

  return emojifixedText;
};

class TextOnly extends Component {
  render() {
    return (
      <div>
        <Comment text="Today we are sailing home :(" />
      </div>
    )
  }
}

export default TextOnly;