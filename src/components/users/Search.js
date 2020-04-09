import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Search extends Component {
  state = {
    text: '',
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,

    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
  };

  onChange = (e) => this.setState({ text: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.text === '') {
      this.props.setAlert('Please enter something', 'ligth');
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: '' });
    }
  };

  render() {
    // Destructing clearUsers from props because its inside render ( sending him up to App Compoment)
    // onClick={this.props.clearUsers} without destructing
    const { showClear, clearUsers } = this.props;

    return (
      <div>
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
        {showClear && (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}
