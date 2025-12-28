import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const Unavbar= () => {
  return (
    <div>
      <header>
        <a href="/"><h1>Moon Blog</h1></a>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/Userlogin">Login</Link>
          <Link to="/Usersignup">Signup</Link>
          <Link to="/userAbout">About</Link>
          <Link to="/userBlogs">Blogs</Link>
          <Link to="/signout">Sigout</Link>
        </nav>
      </header>
    </div>
  )
}

export default Unavbar;
