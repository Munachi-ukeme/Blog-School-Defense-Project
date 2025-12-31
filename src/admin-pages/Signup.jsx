import React, {useState}from 'react';
import { Link } from 'react-router-dom';

function Signup() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();

    console.log("signing up with:", username, email, password, confirmPassword)
  };


  return (
    <div>
      <Link to="/adminpage">Back</Link>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
          type="text"
          id='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
          type="email"
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
          type="password"
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
          type="password"
          id='confirmPassword'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button type='submit'>Signup</button>
        
      </form>
      <Link to="/login">Already an Admin? Signin</Link>
    </div>
  )
}

export default Signup;