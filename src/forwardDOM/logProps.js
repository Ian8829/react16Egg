import React, { Component, forwardRef } from "react";

function logProps(WrappedComponent) {
  class LogProps extends Component {
    componentDidUpdate(prevProps) {
      console.log("old props:", prevProps);
      console.log("new props:", this.props);
    }

    render() {
      const { forwardedRef, ...rest } = this.props;
      return <WrappedComponent ref={forwardedRef} {...rest} />
    }
  }

  return forwardRef((props, ref) => (
    <LogProps {...props} forwardedRef={ref} />
  ));
}

export default logProps;