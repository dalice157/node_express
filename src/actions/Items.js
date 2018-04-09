import { ADD_ITEM, DEL_ITEM, MODIFY_ITEM } from '../constants/actionTypes';


// export function addTaskRequest(){
//   return {
//     type: 'ADD_TASK_REQUEST'
//   };
// }

// export function addTaskSuccess(todos){
// 	console.log('todis', todos[])
//   return {
//     type: 'ADD_TASK_SUCCESS',
//     ...todos
//   };
// }

// export function addTaskFailure(err){
//   return {
//     type: 'ADD_TASK_FAILURE',
//     err
//   };
// }

export function addItem(newTitle) {
	return {
		type: ADD_ITEM,
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
			console.log('json:', response.json())
			if (!response.ok) throw new Error(response.statusText)
			return {
				type: 'ADD_TASK_SUCCESS',
				todos:response.json()
			};
    })
    .catch(err => dispatch(addTaskFailure(err)));
  };
}