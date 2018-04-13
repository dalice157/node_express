
export default function Item (state = [], action){

	switch (action.type){
		case 'ADD_ITEM': 
			return [
        ...state,
        {
          id: action.id + 1,
          title: action.title,
          completed: false
        }
      ];
		default:
			return state;
	}
}