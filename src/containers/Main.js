import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

import List from '../components/List';

class Main extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
	}

	componentDidMount() {
		fetch('http://localhost:3000/posts.json', {
    	method: 'GET'
    })
    .then((response) => {
			//ok 代表狀態碼在範圍 200-299
      if (!response.ok) throw new Error(response.statusText)
      return response.json()
    })
    .then((posts) => this.setState({ posts }))
    .catch((error) => {
      //這裡可以顯示一些訊息
      console.error(error)
    })
	}
	
  render() {
    return (
      <main className="wrap">
				<List data={this.state.posts} />
			</main>
		);
  }
}

export default Main;