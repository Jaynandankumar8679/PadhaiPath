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
