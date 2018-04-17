import React, { Component } from "react";

function logProps(WrappedComponent) {
  class LogProps extends Component {
    componentDidUpdate(prevProps) {
      console.log("old props:", prevProps);
      console.log("new props:", this.props);
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  return LogProps;
}

export default logProps;