import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { connect } from 'react-redux';
import { logout } from '../src/auth/actions';

class Index extends Component {
  handleLogout = e => {
    e.preventDefault();
    this.props.dispatch(logout());
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.user && !nextProps.user) {
      Router.push('/login');
    }
  }

  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }
    return (
      <div>
        <h1>Hi {user.username}</h1>
        <Link href="/about">
          <a>About</a>
        </Link>
        <br />
        <Link href="/login">
          <a>Login</a>
        </Link>
        <br />
        <a href="/api/logout" onClick={this.handleLogout}>
          Logout
        </a>
      </div>
    );
  }
}

export default connect(state => state.auth)(Index);
