import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", username, password);

    navigate("/myblogs");
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        {/* Add arrow icons for back, user, password */}
        <Link to="/adminpage">Back</Link>
         
         <div>
        <label htmlFor="username">Username:</label>
        <input
        id='username'
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
         />
         </div>

        <div>
          <label htmlFor="password">Password:</label>
        <input
        id='password'
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
         />
        </div>

        <button type="submit">Login</button>
      </form>
      <Link to=""> Forgotten Password? </Link>
      <Link to="/signup">Not an admin? Signup</Link>
    </div>
  )
}

export default Login;