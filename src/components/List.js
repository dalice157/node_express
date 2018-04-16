import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Item from './Item';

class List extends React.Component {
  render() {
    const { 
      title,
      completed,
      onComplete,
      onDel,
      onEdit
     } = this.props;

    return (
      <li>
        <Item 
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

// List.propTypes = {
//   title: PropTypes.string.isRequired,
//   completed: PropTypes.bool.isRequired,
//   onUpdate: PropTypes.func,
//   onToggle: PropTypes.func,
//   onDelete: PropTypes.func
// };


export default List;