import React from 'react';

import { categories } from '../store';

const PostDetail = ({ post, onPostDelete }) => {
  const { id, title, body, author, category } = post;

  const cat = categories.find(c => c.id === category);
  const categoryName = cat ? cat.name : '';

  return <div className="card bg-light mb-3">
    <div className="card-header">
      <h5>
        {title}
      </h5>
    </div>
    <div className="card-body">
      <p className="card-text">
        {body}
      </p>
      <p className="card-text">Author: <em>
        {author}
      </em></p>
      <p className="card-text">Category: <em>
        {categoryName}
      </em></p>
    </div>
    <div className="card-footer">
      <button className="btn btn-sm btn-outline-primary mr-1" type="button">Edit</button>
      <button
        className="btn btn-sm btn-outline-danger"
        type="button"
        onClick={() => onPostDelete(id)}
      >
        Delete
      </button>
    </div>
  </div>;
};

export default PostDetail;
