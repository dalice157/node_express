import React, { Component } from 'react';

import Item from './Item';

class List extends React.Component {
  render() {
    const {data} = this.props;
    return (
      <ul>
				<Item lists={data} />
			</ul>
		);
  }
}

export default List;