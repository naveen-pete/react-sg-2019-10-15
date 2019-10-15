import React from 'react';

import PostDetail from './PostDetail';

const posts = [
  {
    id: 1,
    title: 'My Blog Post #1',
    body: 'My blog post 1 body',
    author: 'Naveen',
    category: 'React'
  },
  {
    id: 2,
    title: 'My Blog Post #2',
    body: 'My blog post 2 body',
    author: 'Hari',
    category: 'Angular'
  },
  {
    id: 3,
    title: 'My Blog Post #3',
    body: 'My blog post 3 body',
    author: 'Krish',
    category: 'Redux'
  }
];

const Posts = () => {
  const postDetailElements = posts.map((p) => {
    return <PostDetail key={p.id} post={p} />
  })

  return <div>
    <h3>Posts</h3>
    <hr />
    {postDetailElements}
  </div>;
}

export default Posts;


