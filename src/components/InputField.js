import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputField extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      title: props.value
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); 
  }

  handleChange(e) {
    this.setState({title: e.target.value});
  }

  handleSubmit() {
    this.props.onSubmit(this.state.title)
		this.setState({title:''})
  }

  render() {
    const { title } = this.state;

    return (
      <div className="wrap">
        <input
          {...this.props}
          type="text"
          value={title} 
          onChange={this.handleChange}
        />
        <button type='button' className="btn"
				  onClick={() => {this.handleSubmit(title)}}>送出</button>
      </div>
    );
  }
}

export default InputField;