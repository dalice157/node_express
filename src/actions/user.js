import { RSAA } from 'redux-api-middleware';

let BASE_URL = 'http://localhost:3030/api';

export function loadShopBySid (sid){
  return {
    [RSAA]: {
      endpoint: `${BASE_URL}/shop/${sid}`,
      method: 'GET',     
      types: [
        'REQUEST',
        'LOAD_SHOP_SUCCESS',
        'FAILURE'
      ]
    }
  };
}

export function loadIntroBySid (sid){
  return {
    [RSAA]: {
      endpoint: `${BASE_URL}/shop/${sid}/introduction`,
      method: 'GET',     
      types: [
        'REQUEST',
        'LOAD_INTRO_SUCCESS',
        'FAILURE'
      ]
    }
  };
}