import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Categories from './Categories';
import { categories, AllCategory } from '../store';
// import { getPosts } from '../api/posts';

import { getPosts } from '../redux/actions';

class Posts extends Component {

  constructor() {
    super();

    this.state = {
      categories: categories,
      posts: [],
      category: AllCategory
    };

  }

  componentDidMount() {
    this.props.getPosts();
    // getPosts()
    //   .then((posts) => {
    //     this.setState({ posts });
    //   })
    //   .catch((error) => {
    //     console.log('Get Posts failed.');
    //     console.log('Error:', error);
    //   });
  }

  handleCategorySelect = (category) => {
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

  getCategoryName(categoryId) {
    const { categories } = this.state;
    const category = categories.find(c => c.id === categoryId);
    return category ? category.name : '';
  }

  renderPosts(posts) {
    return <table className="table table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Author</th>
          <th scope="col">Category</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {posts.map(p => <tr key={p.id}>
          <td>{p.title}</td>
          <td>{p.author}</td>
          <td>{this.getCategoryName(p.category)}</td>
          <td>
            <div className="btn-group btn-group-sm">
              <Link className="btn btn-info" to={`/posts/${p.id}`}>View</Link>
              <Link className="btn btn-warning" to="#">Edit</Link>
              <Link className="btn btn-danger" to="#">Delete</Link>
            </div>
          </td>
        </tr>
        )}
      </tbody>
    </table>;
  }

  render() {
    const { category, categories } = this.state;
    const { posts } = this.props;

    const filteredPosts = category.id === 'all'
      ? posts
      : posts.filter(p => {
        return p.category === category.id;
      })

    return <div className="row">
      <div className="col-12 col-md-3">
        <Categories
          categories={categories}
          onCategorySelect={this.handleCategorySelect}
        />
      </div>
      <div className="col-12 col-md-9">
        <h4>Posts</h4>

        {filteredPosts.length > 0
          ? (this.renderPosts(filteredPosts))
          : (<div className="alert alert-info" role="alert">
            No posts for this category
          </div>)
        }
      </div>
    </div>;
  }

}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => dispatch(getPosts())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
