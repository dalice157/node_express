import React, { Component } from 'react';
import {IndexLink, Link } from 'react-router';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const {title} = this.props;

    return (
      <header className="wrap">
        <h1>{title}</h1>
        <nav>
          <ul>
            <li><IndexLink to="/">Home</IndexLink></li>
            <li><Link to="/api/user/1">User</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

//防呆設定
Header.propTypes = { 
  title: PropTypes.string
};

Header.defaultProps = {
  title: '我的待辦清單'
};


export default Header;