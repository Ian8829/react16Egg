import React, { Component } from 'react';

class Profile extends Component {
  onClick = () => {
    this.setState(state => {
      throw new Error("Oh no..");
      return { ...state };
    })
  };

  render() {
    return (
      <div onClick={this.onClick}>
        Name: {this.props.user.name}
      </div>
    )
  }
}

export default Profile;
