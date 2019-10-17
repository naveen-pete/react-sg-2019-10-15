import { categories, posts } from '../store';
import * as PostsApi from '../api/posts';
import * as constants from './constants';

export const getCategories = () => {
  // get categories from the server

  return {
    type: constants.GET_CATEGORIES,
    payload: categories
  }
};

export const getPosts = () => {
  return dispatch => {
    PostsApi.getPosts()
      .then(posts => {
        dispatch({
          type: constants.GET_POSTS,
          payload: posts
        });
      })
      .catch(error => {
        console.log('Get posts failed.');
        console.log('Error:', error);
      });
  };
};

export const createPost = (post) => {
  return dispatch => {
    return PostsApi.createPost(post)
      .then(post => {
        dispatch({
          type: constants.CREATE_POST,
          payload: post
        })
      })
      .catch(error => {
        console.log('Create post failed.');
        console.log('Error:', error);
      })
  }
};
