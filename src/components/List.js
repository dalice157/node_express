import React, { Component } from 'react';

import Item from './Item';

class List extends React.Component {
  render() {
    const { 
      id,
      title,
      completed,
      onComplete,
      onDel,
      onEdit,
     } = this.props;

    return (
      <li>
        <Item 
          id={id}
          title={title} 
          completed={completed} 
          onComplete={onComplete}
          onDel={onDel}
          onEdit={onEdit}
        />
      </li>
    );
  }
}

export default List;