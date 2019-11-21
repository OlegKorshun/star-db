import React, { Component } from 'react';

export default class ErrorButton extends Component {
  constructor() {
    super();
    this.state = {
      renderError: false
    };
  };

  render() {
    if (this.state.renderError) {
      this.foo.bar = 0;
    }

    return (
      <button
        className='errorButton btn btn-danger btn-lg'
        onClick={() => this.setState({ renderError: true })}>
        Throw Error
      </button>
    );
  };
};