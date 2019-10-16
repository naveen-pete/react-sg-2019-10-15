import React from 'react';

import { Route } from 'react-router-dom';

import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import Posts from './Posts';
import PostForm from './PostForm';

const App = () => {
  return <div className="container">
    <Header />
    <Nav />
    <Route path="/" component={Home} />
    <Route path="/posts" component={Posts} />
    <Route path="/posts/new" component={PostForm} />

    <Footer />
  </div>;
};

export default App;
