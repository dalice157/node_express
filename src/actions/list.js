import { RSAA } from 'redux-api-middleware';

const BASE_URL = 'http://localhost:3030/api';

export function loadListAll (){
  return {
    [RSAA]: {
      endpoint: `${BASE_URL}/posts.json`,
      method: 'GET',     
      types: [
        'REQUEST',
        'LOAD_LIST_SUCCESS',
        'FAILURE'
      ]
    }
  }
}
