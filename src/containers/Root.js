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
    this.state = {
      todos: []
    };
    // this.addItem = this.addItem.bind(this);
    // this.delItem = this.delItem.bind(this);
    // this.modifyItem = this.modifyItem.bind(this);
    // this.toggleItem = this.toggleItem.bind(this);
  }

	// addItem(newTitle) { //加入列表
  //   if(newTitle !== ''){ //防呆如果有輸入才會進入
  //     const newId = this.state.todos.length + 1;
  //     const newItems = [
  //       ...this.state.todos,{
  //         id: newId,
  //         title: newTitle,
  //         completed: false
  //       }
  //     ];
  //     this.setState({ todos: newItems});
  //   }
	// }

	// delItem(id) { //刪除列表
	// 	const newItems = this.state.todos.filter(ele => ele.id !== id);
	// 	this.setState({ todos: newItems });
	// }

	// modifyItem(id,newTitle) { //修改列表
	// 	const newItems = this.state.todos.map(ele => {
	// 		if(ele.id !== id)
	// 			return ele;
	// 		return {
  //       id: ele.id,
  //       completed: ele.completed,
	// 			title: newTitle
	// 		}
	// 	});
	// 	this.setState({ todos: newItems });
	// }

	// toggleItem(id) { //checkbox是否勾選
	// 	const newItems = this.state.todos.map(ele => {
	// 		if(ele.id !== id)
	// 			return ele;
	// 		return {
  //       id: ele.id,
	// 			title: ele.title,
	// 			completed: !ele.completed
	// 		}
	// 	});
	// 	this.setState({ todos: newItems });
	// }

  componentDidMount() {
		// fetch('http://localhost:3030/posts.json', {
    // 	method: 'GET'
    // })
    // .then((response) => {
		// 	//ok 代表狀態碼在範圍 200-299
    //   if (!response.ok) throw new Error(response.statusText)
    //   return response.json()
    // })
    // .then((todos) => this.setState({ todos }))
    // .catch((error) => {
    //   //這裡可以顯示一些訊息
    //   console.error(error)
    // })
  }

  render() {
    const { todos } = this.state;
    const { addItem, toggleItem, delItem, itemReducer } = this.props;
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
          onSubmit={(value)=>addItem(value)}
        />
        <Main 
          todos={itemReducer}
					onComplete={(toggleId)=>toggleItem(toggleId)}
					onDel={(delId)=>delItem(delId)}
					onEdit={this.modifyItem}
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
    delItem: (delId) => dispatch(Actions.delItem(delId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);