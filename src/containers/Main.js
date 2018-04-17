import React, { Component } from 'react';

import List from '../components/List';

class Main extends React.Component {
  render() {
		const { todos, onComplete, onDel, onEdit } = this.props;
		const todoElements = todos.map((todo,index) => (
			<List 
				key={index}
				id={todo.id}
				title={todo.title}
				completed={todo.completed}
				//在最底層做呼叫的處理再往上傳
				onComplete={onComplete}
				onDel={onDel}
				onEdit={onEdit}
			/>
		));
    return (
      <main className="wrap">
				<ul>
					{ todoElements }
				</ul>
			</main>
		);
  }
}


export default Main;