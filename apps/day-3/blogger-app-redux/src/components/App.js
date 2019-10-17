import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';

import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import Posts from './Posts';
import PostForm from './PostForm';
import PostDetail from './PostDetail';

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
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={Posts} />
        <Route
          path="/posts/new"
          render={props => <PostForm {...props} categories={categories} />}
        />
        <Route path="/posts/:id" component={PostDetail} />
      </Switch>
      <Footer />
    </div>;
  }
}

export default App;
