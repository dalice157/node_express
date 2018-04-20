const initState = [];

export default function User (state = initState, action){
	switch (action.type) {
    case 'LOAD_LIST_SUCCESS': {
      return [
        ...state,
        action
			];
    }
    default:
      return state;
	}
}