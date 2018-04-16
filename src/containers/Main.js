import React, { Component } from 'react';
import PropTypes from 'prop-types';

import List from '../components/List';

class Main extends React.Component {
  render() {
		const {
			todos,
			onComplete,
      onDel,
      onEdit
		} = this.props;
		console.log("todos:", todos)
		const todoElements = todos.map((todo,index) => (
			<List 
				key={index}
				title={todo.title}
				completed={todo.completed}
				onComplete={() => onComplete(todo.id)}
				onDel={()=> onDel(todo.id)}
				onEdit={()=> onEdit(todo.id, todo.title)}
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

// Main.propTypes = {
//   todos: PropTypes.arrayOf(PropTypes.object).isRequired,
//   onUpdateTodo: PropTypes.func,
//   onToggleTodo: PropTypes.func,
//   onDeleteTodo: PropTypes.func
// };


export default Main;