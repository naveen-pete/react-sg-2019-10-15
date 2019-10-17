import { combineReducers } from 'redux';

import * as constants from './constants';

export const categories = (state = [], action) => {
  switch (action.type) {
    case constants.GET_CATEGORIES:
      return [...action.payload];

    default:
      return state;
  }
};

export const posts = (state = [], action) => {
  switch (action.type) {
    case constants.GET_POSTS:
      return [...action.payload];

    case constants.CREATE_POST:
      return [...state, action.payload];

    default:
      return state;
  }
};


const appReducers = combineReducers({
  categories,
  posts
});

export default appReducers;