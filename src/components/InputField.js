import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputField extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      title: props.value
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({title: e.target.value});
  }

  render() {
    const { onSubmit } = this.props;
    return (
      <div className="wrap">
        <input
          {...this.props}
          type="text"
          value={this.state.title} 
          onChange={this.handleChange}
        />
        <button type='button' className="btn"
				  onClick={
					()=>{
						onSubmit(this.state.title)
						this.setState({title:''})
					}}>送出</button>
      </div>
    );
  }
}

export default InputField;