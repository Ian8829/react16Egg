import React, { Component } from 'react';
import BarChart from './barChart';

class Bar extends Component {
  render() {
    return <BarChart data={[5, 8, 14, 15, 22, 34]} />;
  }
}

export default Bar;