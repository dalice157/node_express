import { ADD_ITEM, DEL_ITEM, MODIFY_ITEM, TOGGLE_ITEM } from '../constants/actionTypes';

let nextTodoId = 0;

// export function test(){
// 	return function(){
// 		console.log('work!')
// 	}
// }


export function addItem(newTitle) {
	return {
		type: ADD_ITEM,
		id: nextTodoId++,
		title: newTitle,
		completed: false
	}
}

export function delItem(delId) {
	return {
		type: DEL_ITEM,
		id: delId
	}
}

export function modifyItem(modifyId, modifyTitle) {
	return {
		type: MODIFY_ITEM,
		id: modifyId,
		title: modifyTitle
	}
}

export function toggleItem(toggleId) {
	return {
		type: TOGGLE_ITEM,
		id: toggleId
	}
}