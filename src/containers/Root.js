import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../components/Header';
import InputField from '../components/InputField';
import Main from './Main';
import Footer from '../components/Footer';

import * as Actions from '../actions/Items';

class Root extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleAdd = this.handleAdd.bind(this);
    this.handleModify = this.handleModify.bind(this);
    this.handleDel = this.handleDel.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleAdd(title){ //防呆：當title為0時就不送出
    if (title.length !== 0) {
      this.props.addItem(title);
    }
  }

  handleModify(id, title){
    this.props.modifyItem(id, title);
  }

  handleDel(id){
    this.props.delItem(id);
  }

  handleToggle(id){
    this.props.toggleItem(id);
  }

  render() {
    const { toggleItem, delItem, modifyItem, itemReducer } = this.props;

    return (
      <div>
        <Header 
          title="我的待辦事項"
          userName="Da Chu"
          todoCount={itemReducer.filter((todo) => todo.completed).length}
        />
        <InputField 
          placeholder="新增待辦清單"
          value=''
          onSubmit={this.handleAdd}
        />
        <Main 
          todos={itemReducer}
					onComplete={this.handleToggle}
					onDel={this.handleDel}
					onEdit={this.handleModify}
        />
				<Footer />
			</div>
		);
  }
}

const mapStateToProps = (state) => {
	return {
    itemReducer: state.itemReducer
  };
}

const mapDispatchToProps = (dispatch) => {
	return {
    addItem: (newTitle) => dispatch(Actions.addItem(newTitle)),
    toggleItem: (toggleId) => dispatch(Actions.toggleItem(toggleId)),
    delItem: (delId) => dispatch(Actions.delItem(delId)),
    modifyItem: (modifyId, modifyTitle) => dispatch(Actions.modifyItem(modifyId, modifyTitle))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);