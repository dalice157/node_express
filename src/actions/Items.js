import { ADD_ITEM, DEL_ITEM, MODIFY_ITEM, TOGGLE_ITEM } from '../constants/actionTypes';

let nextTodoId = 0

export function addItem(newTitle) {
	return {
		type: ADD_ITEM,
		id: nextTodoId++,
		title: newTitle
	}
}

export function delItem(delId) {
	return {
		type: DEL_ITEM,
		id: delId
	}
}

export function modifyItem(modifyTitle) {
	return {
		type: MODIFY_ITEM,
		title: modifyTitle
	}
}

export function toggleItem(toggleId) {
	return {
		type: TOGGLE_ITEM,
		id: toggleId
	}
}