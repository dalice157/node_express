import React, { Component } from 'react';

import Header from '../components/Header';
import Main from './Main';
import Footer from '../components/Footer';

class Root extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
				<Footer />
			</div>
		);
  }
}

export default Root;