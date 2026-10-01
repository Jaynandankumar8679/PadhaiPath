import React from "react";
import "./Navbarc.css";

function Navbar() {
    return (
        <div className="navbar">
            <img src="C:\Users\hp\OneDrive\Desktop\PadhaiPath\Frontend\myApp\src\assets" alt="PadhaiPathLogi" />
            <a href="#">Home</a>
            <a href="#">Classes</a>
            <a href="#">Downloads</a>
            <a href="#">Subjects</a>
            <input type="text" placeholder="search a chapter,topic,orsubject" id="SearchBar"/>
            <button id="login">Login</button>
        </div>
    );
}

export default Navbar;