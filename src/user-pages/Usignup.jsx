import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Usignup (){
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit =(e) => {
     e.preventDefault();
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
          <h2>Sign Up</h2>

          <div>
            <label htmlFor="lastName">LastName:</label>
            <input
            type="text"
            id='lastName'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            />
          </div>

          <div>
            <label htmlFor="firstName">firstName:</label>
            <input
            type="text"
            id='firstName'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
            type="email"
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <input
            type="password"
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
          </div>

          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
            type="password"
            id='confirmPassword'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            />
          </div>

          <button
          disabled ={!lastName || !firstName || !email ||!password ||!confirmPassword}
          type="submit">Signup</button>
        </form>
    </div>
  )
}

export default Usignup
