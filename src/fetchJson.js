import React, { Component, Fragment } from 'react';

export default class FetchJson extends Component {
  state = {
    data: null,
    isLoading: true
  };

  fetchAndUpdate = async () => {
    const response = await fetch(this.props.url);
    const result = await response.json();
    this.setState({ data: result, isLoading: false });
  };

  componentDidMount() {
    this.fetchAndUpdate();
  }

  render() {
    return <Fragment>{this.props.render(this.state)}</Fragment>;
  }
}