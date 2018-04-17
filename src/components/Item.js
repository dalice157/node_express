import React, { Component } from 'react';

// import InputField from './InputField';

class Item extends React.Component {
	constructor(props, context) {
    super(props, context);
    this.state = { 
      editable: false,
      title: props.title
    };
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleEditMode() {
    this.setState({ editable: !this.state.editable });
  }

  handleSubmit() {
    this.props.onEdit(this.props.id, this.state.title);
    this.toggleEditMode();
  }

  handleChange(e) {
    this.setState({title: e.target.value});
  }

  renderViewMode() {
    const {title, completed, onEdit, onDel, onComplete, id} = this.props;
		
    return (
      <label className="checkbox">
        <input
          type="checkbox"
          checked={completed}
          onChange={()=>onComplete(id)}
        />
        <span style={{
          textDecoration: completed ? 'line-through' : 'none',
          color:  completed ? '#ccc' : '#000'
        }}>
        {title} 
        </span>
        <button type='button' className="btn" onClick={()=>onDel(id)} >刪除</button>
        <button type='button' className="btn" onClick={this.toggleEditMode} >修改</button>
      </label>
    );
  }

  renderEditMode() {
    const {title} = this.state;

    return (
      <div className="wrap">
        <input
          placeholder="編輯待辦事項"
          type="text"
          value={title} 
          onChange={this.handleChange}
        />
        <button type='button' className="btn"
				  onClick={this.handleSubmit}>送出</button>
      </div>
    );
  }

  render() {
    return this.state.editable ?
      this.renderEditMode() :
      this.renderViewMode();
  }
}

export default Item;