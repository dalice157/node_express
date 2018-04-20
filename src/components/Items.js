import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Items extends React.Component {
	

	constructor(props, context) {
    super(props, context);
    this.state = { 
    };
  }

  render() {
		const {list} = this.props;
    return (
      <div>
					22
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
	return {
	
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Items);