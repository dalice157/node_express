const initState = {
	todos:[]
};

export default function Item (state = initState, action){
	switch (action.type){
		case 'ADD_TASK_SUCCESS':
			return {
				...state
			};
		case 'ADD_ITEM': 
			return {
					...initState,
					todos:[{
						title: action.title,
						completed: false
					}]
				};
		default:
			return state;
	}
}