import React, { Component } from 'react';
import { connect } from 'react-redux';

import Items from '../components/Items';

import * as Actions from '../actions/list';

class Api extends React.Component {

  componentDidMount(){
    console.log(this.props.loadListAll())
  }

  render() {
    return (
      <div className="wrap main-wrap">
         <Items />
			</div>
		);
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
		listReducer:state.listReducer
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
    loadListAll: () => dispatch(Actions.loadListAll())
	}
};


export default connect(mapStateToProps,mapDispatchToProps)(Api);