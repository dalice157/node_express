import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InputField from './InputField';

class Item extends React.Component {
	constructor(props, context) {
    super(props, context);
    this.state = { 
      editable: false
    };
    this.toggleEditMode = this.toggleEditMode.bind(this);
  }

  toggleEditMode() {
    this.setState({ editable: !this.state.editable });
  }

  renderViewMode() {
    const {
      title, 
      completed, 
      onDel,
      onEdit, 
      onComplete
    } = this.props;
		
    return (
      <label className="checkbox">
        <input
          type="checkbox"
          checked={completed}
          onChange={onComplete}
        />
        <span>{title} </span>
        <button type='button' className="btn" onClick={onDel} >刪除</button>
        <button type='button' className="btn" onClick={this.toggleEditMode} >修改</button>
      </label>
    );
  }

  renderEditMode() {
    const {
      title,
      onEdit
    } = this.props;

    return (
      <InputField
        autoFocus
        placeholder="編輯待辦事項"
        value={title}
        onSubmit={(id, newValue) => {
				onEdit(id, newValue)
				this.toggleEditMode()
			  }}
      />
    );
  }

  render() {
    return this.state.editable ?
      this.renderEditMode() :
      this.renderViewMode();
  }
}

// Item.propTypes = {
//   title: PropTypes.string.isRequired,
//   completed: PropTypes.bool.isRequired,
//   onUpdate: PropTypes.func,
//   onToggle: PropTypes.func,
//   onDel: PropTypes.func
// };

export default Item;