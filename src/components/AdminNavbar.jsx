import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function AdminNavbar() {
  return (
    <div>
      <header>
        <a href="/adminpage"><h1>Moon Blog</h1></a>

        <nav>
          <Link to="/adminpage">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/new-post">Create Post</Link>
          <Link to="/myblogs">My Blogs</Link>
          <Link to="/logout">Logout</Link>

        </nav>
      </header>
    </div>
  )
}

export default AdminNavbar;
