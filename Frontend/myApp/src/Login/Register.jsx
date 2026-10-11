import React from 'react';
import "./Login.css";
const Register = () => {
  return (
    <>
     <div className="user_Login"><br />
        <h5 style={{marginTop:"4px"}}>Carefully fill credentials data </h5><br />
        <input type="email" placeholder="Please valid email enter"  /><br /><br />
        <input type="password" placeholder="Create strong password" /><br /><br />
        <button type="submit" id="LoginButten">Register</button>
      </div>
    
    </>
  )
}

export default Register