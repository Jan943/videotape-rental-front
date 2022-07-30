import React, { Component } from 'react';

class Film extends Component {
  render() {
    return (
      <h1>
        <p>------------</p>
        <p>{this.props.info.id}</p>
        <p>{this.props.info.title}</p>
        <p>{this.props.info.productionYear}</p>

      </h1>
    );
  }
}

export default Film;
