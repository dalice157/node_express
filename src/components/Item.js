import React, { Component } from 'react';

class Item extends React.Component {
  render() {
		const {lists} = this.props;
    return (
      lists.map((list)=> (
				<li key={list.id}>
					<h2>{list.title}</h2>
					<p>{list.content}</p>
				</li>
			))
		);
  }
}

export default Item;