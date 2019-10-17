import React, { Component } from 'react';

import { Route } from 'react-router-dom';

import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import Posts from './Posts';
import PostForm from './PostForm';
import { categories } from '../store';

class App extends Component {
  state = {
    categories: categories
  }

  render() {
    const { categories } = this.state;
    return <div className="container">
      <Header />
      <Nav />
      <Route path="/" component={Home} />
      <Route path="/posts" component={Posts} />
      <Route path="/posts/new" render={() => {
        return <PostForm categories={categories} />
      }} />
      <Footer />
    </div>;
  }
}

export default App;
