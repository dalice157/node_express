import { ADD_ITEM, DEL_ITEM, MODIFY_ITEM } from '../constants/actionTypes';


export function addItem(newTitle) {
	return {
		type: ADD_ITEM,
		id: 1,
		title: newTitle
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

export function addTask(){
  return (dispatch) => {
    return fetch('http://localhost:3000/posts.json', {
    	method: 'GET'
		})
		.then((response) => {
			//ok 代表狀態碼在範圍 200-299
			if (!response.ok) throw new Error(response.statusText)
			return response.json();
		})
		.then(
			(todos) =>  {
				type: 'ADD_TASK_SUCCESS',
				todos
			}
		)
    .catch(err => dispatch(addTaskFailure(err)));
  };
}