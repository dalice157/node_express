import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import InputField from '../components/InputField';
import Main from './Main';
import Footer from '../components/Footer';

import * as Actions from '../actions/Items';

class Root extends React.Component {
  constructor(props) {
    super(props);
    console.log('super:', props)
    this.state = {
      todos: []
    };
    this.addItem = this.addItem.bind(this);
    this.delItem = this.delItem.bind(this);
    this.modifyItem = this.modifyItem.bind(this);
    this.toggleItem = this.toggleItem.bind(this);
  }

	addItem(newTitle) { //加入列表
    if(newTitle !== ''){ //防呆如果有輸入才會進入
      const newId = this.state.todos.length + 1;
      const newItems = [
        ...this.state.todos,{
          id: newId,
          title: newTitle,
          completed: false
        }
      ];
      this.setState({ todos: newItems});
    }
	}

	delItem(id) { //刪除列表
		const newItems = this.state.todos.filter(ele => ele.id !== id);
		this.setState({ todos: newItems });
	}

	modifyItem(id,newTitle) { //修改列表
		const newItems = this.state.todos.map(ele => {
			if(ele.id !== id)
				return ele;
			return {
        id: ele.id,
        completed: ele.completed,
				title: newTitle
			}
		});
		this.setState({ todos: newItems });
	}

	toggleItem(id) { //checkbox是否勾選
		const newItems = this.state.todos.map(ele => {
			if(ele.id !== id)
				return ele;
			return {
				id: ele.id,
				title: ele.title,
				completed: !ele.completed
			}
		});
		this.setState({ todos: newItems });
	}

  componentDidMount() {
		fetch('http://localhost:3000/posts.json', {
    	method: 'GET'
    })
    .then((response) => {
			//ok 代表狀態碼在範圍 200-299
      if (!response.ok) throw new Error(response.statusText)
      return response.json()
    })
    .then((todos) => this.setState({ todos }))
    .catch((error) => {
      //這裡可以顯示一些訊息
      console.error(error)
    })
  }

  render() {
    const { todos } = this.state;
    const { loadItems } = this.props;
    console.log('items', this.props)
    return (
      <div>
        <Header 
          title="我的待辦事項"
          userName="Da Chu"
          todoCount={todos.filter((todo) => todo.completed).length}
        />
        <InputField 
          placeholder="新增待辦清單"
          value=''
          onSubmit={this.props.addItem}
        />
        <Main 
          todos={todos}
					onComplete={this.toggleItem}
					onDel={this.delItem}
					onEdit={this.modifyItem}
          />
				<Footer />
			</div>
		);
  }
}

const mapStateToProps = (state, ownProps) => {
	return {
    todos:state.itemReducer.todos
  };
}

const mapDispatchToProps = (dispatch) => {
	return {
    loadItems:  dispatch(Actions.addTask()),
    addItem: (newTitle) => dispatch(Actions.addItem(newTitle))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);