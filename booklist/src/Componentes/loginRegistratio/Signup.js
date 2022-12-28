import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

function Signup() {
  return (
    <div className="Signup">
      <h1>Register</h1>
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
      <input
        className='form-control my-2'
        type="Password"
        placeholder="Confirm Password"
      ></input>
      <Link to="/">
        <button className='btn btn-primary' type="submit">Register</button>
      </Link>
    </div>
  );
}

export default Signup;
