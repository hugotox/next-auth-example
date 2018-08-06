import React, { Component } from 'react';
import Link from 'next/link';

class About extends Component {
  render() {
    return (
      <div>
        This is about us
        <br />
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    );
  }
}

export default About;
