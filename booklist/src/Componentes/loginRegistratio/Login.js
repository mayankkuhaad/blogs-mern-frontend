import React from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"

function Login() {
  return (
    <div className='LoginPage'>
        <h1>Login</h1>
        <input
            className='form-control my-2'
            type="text"
            placeholder="UserName"
          ></input>
          <input
            className='form-control my-2'
            type="Password"
            placeholder="Password"
          ></input>
          <Link to="/Booklist"><button className='btn btn-primary' type="submit">Login</button></Link>
          <Link to="/Signup"><button type="submit" className='btn btn-primary'>Signup</button></Link>
    </div>
  )
}

export default Login