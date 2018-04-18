import React, { Component } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';


class Root extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    const { children  } = this.props;
    return (
      <div>
        <Header title="我的待辦事項" />
        { children }
				<Footer />
			</div>
		);
  }
}

export default Root;