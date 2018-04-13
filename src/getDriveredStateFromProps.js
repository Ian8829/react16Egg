import React, { Component, Fragment } from 'react';
import FetchJson from './fetchJson';

export default class GetDriveredStateFromProps extends Component {
  state = { person: 1 };

  render() {
    return (
      <Fragment>
        <FetchJson
          url={`https://swapi.co/api/people/${this.state.person}`}
          render={({ isLoading, data }) => {
            return <div>{isLoading ? "Loading..." : `Name: ${data.name}`}</div>;
          }}
        />
      </Fragment>
    );
  }
}