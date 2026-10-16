//In this page do not try to any changes due to some problem arise in this page

import React from 'react';
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const handleDataChange = (e) => {
    const isDataMatched = e.target.value;

    if (isDataMatched === "6") {
      navigate("/Login");
    }
  };

  return (
    <>
     <div className="user_Login"><br />
        <h5 style={{marginTop:"4px"}}>Carefully fill credentials data </h5><br />
        <input type="email" placeholder="Please valid email enter"  /><br /><br />
        <input type="password" placeholder="Create strong password" /><br /><br />
        <button type="submit" id="LoginButten" onChange={handleDataChange}>Register</button><br />
        <Link to="/Login">Already register then Login</Link>
      </div>
    
    </>
  )
}

export default Register