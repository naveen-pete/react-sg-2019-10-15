import React, { Component } from 'react';

import { getPost } from '../api/posts';

import { categories } from '../store';

class PostDetail extends Component {
  constructor() {
    super();

    this.state = {
      post: {
        id: 0,
        title: '',
        body: '',
        author: '',
        category: ''
      }
    };
  }

  componentDidMount() {
    getPost(this.props.match.params.id)
      .then(post => this.setState({ post }))
      .catch(error => {
        console.log('Get post failed!');
        console.log('Error:', error);
      });
  }

  render() {
    const { id, title, body, author, category } = this.state.post;

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
        >
          Delete
      </button>
      </div>
    </div>;
  }
}

// const PostDetail = ({ post, onPostDelete }) => {
//   const { id, title, body, author, category } = post;



// };

export default PostDetail;
