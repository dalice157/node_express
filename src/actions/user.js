import { RSAA } from 'redux-api-middleware';

const BASE_URL = 'http://localhost:3030/api';

export const loadShopBySid = sid => {
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

export const loadIntroBySid = sid => {
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