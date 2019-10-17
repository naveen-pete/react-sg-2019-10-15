
const apiUrl = 'http://localhost:3001/posts';

export const getPosts = () => {
  return fetch(apiUrl)
    .then((response) => {
      return response.json();
    });
};

export const getPost = (id) => {
  return fetch(`${apiUrl}/${id}`)
    .then((response) => {
      return response.json();
    });
};

export const createPost = post =>
  fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post)
  })
    .then((response) => response.json());
