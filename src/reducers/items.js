
export default function Item (state = [], action){

	switch (action.type){
		case 'ADD_ITEM': 
			return [
        ...state,
        {
          id: action.id,
          title: action.title,
          completed: false
        }
			];
		case 'TOGGLE_ITEM': 
			return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
			);
		case 'DEL_ITEM': 
			return state.filter(todo =>
        todo.id !== action.id
      );
		default:
			return state;
	}
}