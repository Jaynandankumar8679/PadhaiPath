import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/PadhaiPathLogo.png";
import "./Navbarc.css";
//import { useNavigate } from "react-router-dom";
function Navbar() {
  //const navigate = useNavigate();
  // const handleClassChange = (e) => {
  //   const selectedClass = e.target.value;

  //   if (selectedClass === "6") {
  //     navigate("/Class6English");
  //   }
  // };
  return (
    <>
      <div className="navbar">
        <img src={Logo} alt="PadhaiPath Logo" id="logo" />
        <div className="content">
          <Link to="/">HOME</Link>
          {/* <select onChange={handleClassChange} className="select1">
            <option value="">Select Class</option>
            <option value="1">Class 1</option>
            <option value="2">Class 2</option>
            <option value="3">Class 3</option>
            <option value="4">Class 4</option>
            <option value="5">Class 5</option>
            <option value="6">Class 6</option>
            <option value="7">Class 7</option>
            <option value="8">Class 8</option>
          </select> */}
            <div class="nav-item dropdown">
         <a href="#" className="nav-link" id="programsBtn">SELECT CLASS<span class="arrow"></span></a>

      <div class="dropdown-menu" id="programsMenu">
          <Link to="/Class1">Class 1</Link>
          <Link to="/Class2">Class 2</Link>
          <Link to="/Class4">Class 4</Link>
          <Link to="/Class3">Class 3</Link>
          <Link to="/Class5">Class 5</Link>
          <Link to="/Class6">Class 6</Link>
          <Link to="/Class7">Class 7</Link>
          <Link to="/Class8">Class 8</Link>
          <Link to="/Class9">Class 9</Link>
          <Link to="/Class10">Class 10</Link>
          <Link to="/Class11">Class 11</Link>
          <Link to="/Class12">Class 12</Link>
          <Link to="/Graduation">Graduation</Link>
      </div>
    </div>

          <div class="nav-item dropdown">
         <a href="#" className="nav-link" id="programsBtn">TRAININGS <span class="arrow"></span></a>

      <div class="dropdown-menu" id="programsMenu">
          <Link to="/ProblemSolving">Problem Solving</Link>
          <Link to="/Innovation">Innovation</Link>
          <Link to="/EnglishSpoken">English Spoken</Link>
          <Link to="/Entrepreneurship">Entrepreneurship</Link>
          <Link to="/Coding">Coding</Link>
      </div>
    </div>
          <Link to="/Download">DOWNLOAD</Link>
          <Link to="/Subject">SUBJECT</Link>
        </div>
        <input
          type="text"
          placeholder="Search a Chapter, Topic, or Subject,and PDF"
          id="SearchBar"
        />
        <Link to="/Login" id="login">LOGIN</Link>
      </div>
    </>
  );
}

export default Navbar;
