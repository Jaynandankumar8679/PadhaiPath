import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/PadhaiPathLogo.png";
import "./Navbarc.css";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const handleClassChange = (e) => {
    const selectedClass = e.target.value;

    if (selectedClass === "6") {
      navigate("/Class6English");
    }
  };
  return (
    <>
      <div className="navbar">
        <img src={Logo} alt="PadhaiPath Logo" id="logo" />
        <div className="content">
          <Link to="/LandingAtHomePage">Home</Link>
          {/* <a href="#"><b>Classes</b></a> */}

          <select onChange={handleClassChange} className="select1">
            <option value="">Select Class</option>
            <option value="1">Class 1</option>
            <option value="2">Class 2</option>
            <option value="3">Class 3</option>
            <option value="4">Class 4</option>
            <option value="5">Class 5</option>
            <option value="6">Class 6</option>
            <option value="7">Class 7</option>
            <option value="8">Class 8</option>
          </select>

          <Link to="/Download">Download</Link>
          <Link to="/Subject">Subject</Link>
        </div>
        <input
          type="text"
          placeholder="Search a Chapter, Topic, or Subject,and PDF"
          id="SearchBar"
        />
        <Link to="/Login" id="login">
          Login
        </Link>
      </div>
    </>
  );
}

export default Navbar;
