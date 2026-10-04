import React from "react";
import { Link } from "react-router-dom";
import "./Navbarc.css";
import Logo from "../assets/PadhaiPathLogo.png";

function Navbar() {
    return (
        <>
            <div className="navbar">
                <img src={Logo} alt="PadhaiPath Logo" id="logo" />
                <div className="content">

                    <a href="/">Home</a>
                    {/* <a href="#"><b>Classes</b></a> */}

                    <select className="select1">
                        <option value="/"><button>Select Classes</button></option>
                        <option value="1">Class 6</option>
                        <option value="2">Class 7</option>
                        <option value="10">Class 8</option>
                        <option value="11">Class 9</option>
                        <option value="12">Class 10</option>
                        <option value="12">Class 11</option>
                        <option value="12">Class 12</option>
                        <option value="12">UG</option>
                        <option value="12">PG</option>
                    </select>
                    <a href="#"><b>Downloads</b></a>
                    <a href="#"><b>Subjects</b></a>
                </div>
                <input
                    type="text"
                    placeholder="Search a Chapter, Topic, or Subject,and PDF"
                    id="SearchBar"
                />
                <button id="login">Login</button>

            </div>

        </>
    );
}

export default Navbar;
