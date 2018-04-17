import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const {
      title,
      userName,
      todoCount
    } = this.props;

    return (
      <header className="wrap">
        <h1>{title}</h1>
        <p>哈囉，{userName}：</p>
        <p>你有 {todoCount} 項已完成待辦事項</p>
        
      </header>
    );
  }
}

//防呆設定
Header.propTypes = { 
  title: PropTypes.string,
  userName: PropTypes.string,
  todoCount: PropTypes.number
};

Header.defaultProps = {
  title: '我的待辦清單',
  userName: 'Guest',
  todoCount: 0
};


export default Header;