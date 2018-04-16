import React, { Component } from 'react';

import List from '../components/List';

class Main extends React.Component {
  render() {
		const { todos, onComplete, onDel, onEdit } = this.props;
		const todoElements = todos.map((todo,index) => (
			<List 
				key={index}
				title={todo.title}
				completed={todo.completed}
				onComplete={() => onComplete(todo.id)}
				onDel={()=> onDel(todo.id)}
				onEdit={()=> onEdit(todo.id, 'onChange')}
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