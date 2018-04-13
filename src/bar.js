import React, { Component } from 'react';
import BarChart from './barChart';

class Bar extends Component {
  barChartRef = React.createRef();

  highlightThird = () => {
    this.barChartRef.current.highlight(3);
  };

  render() {
    return (
      <div>
        <BarChart data={[5, 8, 14, 15, 22, 34]} ref={this.barChartRef} />
        <button onClick={this.highlightThird}>Highlight</button>
      </div>
    )
  }
}

export default Bar;