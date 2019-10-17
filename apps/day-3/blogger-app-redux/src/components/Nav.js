import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Nav = (props) => {
  console.log(props);
  return <ul className="nav nav-pills">
    <li className="nav-item">
      <NavLink exact className="nav-link" to="/" activeClassName="active">Home</NavLink>
    </li>
    <li className="nav-item">
      <NavLink exact className="nav-link" to="/posts" activeClassName="active">Posts</NavLink>
    </li>
    <li className="nav-item">
      <NavLink exact className="nav-link" to="/posts/new" activeClassName="active">New Post</NavLink>
    </li>
  </ul>;
};

export default Nav;
