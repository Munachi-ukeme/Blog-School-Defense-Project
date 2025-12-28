import React from 'react'

function Signup() {
  return (
    <div>
      <form action="">
        <h1>Signup</h1>
        <a href="/adminpage">Back</a>

        <label htmlFor="username">Username:</label>
        <input type="text" />

        <label htmlFor="email">Email:</label>
        <input type="email" />

        <label htmlFor="password">Password:</label>
        <input type="password" />

        <label htmlFor="confirm password">Comfirm Password:</label>
        <input type="password" />
      </form>
      <a href="/login">Already an Admin? Signin</a>
    </div>
  )
}

export default Signup;