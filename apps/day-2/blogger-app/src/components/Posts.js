import React, { Component } from 'react';

import PostDetail from './PostDetail';
import Categories from './Categories';
import PostForm from './PostForm';
import { posts, categories, AllCategory } from '../store';

class Posts extends Component {

  constructor() {
    super();

    this.state = {
      categories: categories,
      posts: posts,
      category: AllCategory
    };
  }

  handleCategorySelect = (category) => {
    // DONT DO THIS
    // this.state.category = category;

    this.setState({ category: category });
  }

  handlePostCreate = (newPost) => {
    this.setState((prevState) => {
      return {
        posts: [...prevState.posts, newPost]
      };
    });
  }

  handlePostDelete = (id) => {
    this.setState((prevState) => {
      return {
        posts: prevState.posts.filter(p => p.id !== id)
      };
    });
  }

  render() {
    const { category, posts, categories } = this.state;

    const filteredPosts = category.id === 'all'
      ? posts
      : posts.filter(p => {
        return p.category === category.id;
      })

    const postDetailElements = filteredPosts.map((p) => {
      return <PostDetail key={p.id} post={p} onPostDelete={this.handlePostDelete} />
    })

    return <div className="row">
      <div className="col-12 col-md-3">
        <Categories
          categories={categories}
          onCategorySelect={this.handleCategorySelect}
        />
      </div>
      <div className="col-12 col-md-9">
        <h3>Posts</h3>

        {filteredPosts.length > 0
          ? postDetailElements
          : <div className="alert alert-info" role="alert">
            No posts for this category
          </div>
        }
      </div>
    </div>;
  }

}

export default Posts;


