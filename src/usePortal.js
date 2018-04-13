import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class Portal extends Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        {ReactDOM.createPortal(
          <div className="overlay">Welcome</div>,
          document.getElementById('portal-container')
        )}
      </div>
    );
  }
}

export default Portal;