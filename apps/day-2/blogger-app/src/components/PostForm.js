import React, { Component } from 'react';

class PostForm extends Component {
  state = {
    title: '',
    body: '',
    author: '',
    category: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const post = { ...this.state, id: Date.now() };
    this.props.onPostCreate(post);

    this.setState({
      title: '',
      body: '',
      author: '',
      category: ''
    });
  }

  render() {
    const { categories } = this.props;
    const { title, category, body, author } = this.state;

    return <div>
      <h3 className="mr-3">Post Form</h3>

      <div className="card bg-light">
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                required
                type="text"
                className="form-control"
                id="title"
                name="title"
                placeholder="Enter title"
                value={title}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="body">Body</label>
              <textarea
                required
                className="form-control"
                id="body"
                name="body"
                placeholder="Enter body"
                rows="3"
                cols="30"
                value={body}
                onChange={this.handleChange}
              >
              </textarea>
            </div>
            <div className="form-group">
              <label htmlFor="author">Author</label>
              <input
                required
                type="text"
                className="form-control"
                id="author"
                name="author"
                placeholder="Enter author"
                value={author}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select
                required
                className="form-control"
                id="category"
                name="category"
                value={category}
                onChange={this.handleChange}
              >
                <option value=""></option>
                {categories.map(c => <option
                  key={c.id}
                  value={c.id}
                >
                  {c.name}
                </option>)}
              </select>
            </div>

            <button type="submit" className="btn btn-primary">Save</button>
          </form>
        </div>
      </div>

    </div>;
  }
}

export default PostForm;
