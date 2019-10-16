import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return <ul className="nav nav-pills">
    <li className="nav-item">
      <Link className="nav-link" to="/">Home</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/posts">Posts</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/posts/new">New Post</Link>
    </li>
  </ul>;
};

export default Nav;
