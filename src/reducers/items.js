const initState = 
	[{
		id:0,
		title: '',
		completed:''
	}]
;

export default function Item (state = initState, action){
	console.log('state', state)
	switch (action.type){
		case 'ADD_ITEM': 
			return 	state;
		default:
			return state;
	}
}