import React, { Component, createRef } from 'react';
import * as d3 from 'd3';

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.chartRef = createRef();
    console.log("constructor: ", this.chartRef.current);
  }

  componentDidMount() {
    d3.select(this.chartRef.current);
    console.log("componentDidMount: ", this.chartRef.current);
  }

  render() {
    return <svg ref={this.chartRef} />;
  }
}

export default BarChart;