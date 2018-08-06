import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router, { withRouter } from 'next/router';
import { login } from '../src/auth/actions';

class Login extends Component {
  static isPublic = true;

  state = {
    username: '',
    password: ''
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(login(this.state));
  };

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <h3>Login</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleOnChange}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleOnChange}
          />
          <input type="submit" value="Login" />
        </form>
        <style jsx>{`
          label,
          input {
            display: block;
            margin-bottom: 10px;
          }
        `}</style>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

export default withRouter(connect(mapStateToProps)(Login));
