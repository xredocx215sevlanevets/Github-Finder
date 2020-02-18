import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Search extends Component {
  state = {
    text: ''
  };

  static propTypes = {
    SearchUsers: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ text: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    // console.log(this.state.text);
    this.props.searchUsers(this.state.text);
    this.setState({ text: '' });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={this.state.text}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
    );
  }
}
