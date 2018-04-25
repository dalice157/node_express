import React, { Component } from 'react';
import { connect } from 'react-redux';

import Items from '../components/Items';

import { loadShopBySid, loadIntroBySid } from '../actions/user';

class Api extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillMount(){
    console.log('api:',this.props)
    // this.props.loadListAll(9527);
  }

  componentDidMount(){
    
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
		userReducer:state.userReducer
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
    loadListAll: (sid) => dispatch(loadShopBySid(sid))
	}
};


export default connect(mapStateToProps,mapDispatchToProps)(Api);