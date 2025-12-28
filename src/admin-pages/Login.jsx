import React from 'react'

function Login() {
  return (
    <div>
      <form action="">
        <h1>Login</h1>
        {/* Add arrow icons for back, user, password */}
        <a href="/adminpage">Back</a>

        <label htmlFor="username">Username:</label>
        <input type="text" />

        <label htmlFor="password">Password:</label>
        <input type="password" />
      </form>
      <a href="">Forgotten Password?</a>
      <a href="signup">Not an admin? Signup</a>
    </div>
  )
}

export default Login;
