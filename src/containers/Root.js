import React, { Component } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';


class Root extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        <Header title="我的待辦事項" />
        {this.props.children}
				<Footer />
			</div>
		);
  }
}

export default Root;