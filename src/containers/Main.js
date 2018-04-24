import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import InputField from '../components/InputField';
import List from '../components/List';

import * as Actions from '../actions/Items';

class Main extends React.Component {
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
    const todoCount = itemReducer.filter((todo) => todo.completed).length;
		const todoElements = itemReducer.map((todo,index) => (
			<List 
				key={index}
				id={todo.id}
				title={todo.title}
				completed={todo.completed}
				//在最底層做呼叫的處理再往上傳
				onComplete={this.handleToggle}
				onDel={this.handleDel}
				onEdit={this.handleModify}
			/>
		));
    return (
			<div className="wrap main-wrap">
				<p>哈囉，Da Chu：</p>
        <p>你有 <code>{todoCount}</code> 項已完成待辦事項</p>
				<InputField 
          placeholder="新增待辦清單"
          value=''
          onSubmit={this.handleAdd}
        />
				<main>
					<ul>
						{ todoElements }
					</ul>
				</main>
			</div>
		);
  }
}
//防呆設定
Main.propTypes = { 
  userName: PropTypes.string,
  todoCount: PropTypes.number
};

Main.defaultProps = {
  userName: 'Guest',
  todoCount: 0
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Main);