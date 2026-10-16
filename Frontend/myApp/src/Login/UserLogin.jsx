//In this page do not try to any changes due to some problem arise in this page
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.css";
function UserLogin() {
  const navigate = useNavigate();
  const handleClassChange = (e) => {
    const isFilledData = e.target.value;

    if (isFilledData === "6") {
      navigate("/Dashboard");
    }
  };
  return (
    <>
      <div className="user_Login">
        <h5 style={{marginTop:"4px"}}>If you already register then Login </h5><br />
        <input type="email" placeholder="Enter your email" /><br /><br />
        <input type="password" placeholder="Enter your password" /><br /><br />
        <button type="submit" id="LoginButten" onChange={handleClassChange}>Login</button>
        <br /><Link to="/Register">Click here to register</Link>
      </div>
    </>
  );
}
export default UserLogin;
