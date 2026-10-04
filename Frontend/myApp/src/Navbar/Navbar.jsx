import React from "react";
import "./Navbarc.css";
import Logo from "../assets/PadhaiPathLogo.png";

function Navbar() {
    return (
        <>
            <div className="navbar">
                <img src={Logo} alt="PadhaiPath Logo" id="logo" />
                <div className="content">
                    <a href="#"><b>Home</b></a>
                    <a href="#"><b>Classes</b></a>
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



                <p>Lorem, ipsum dolor sit amet consectetur 
                    adipisicing elit. Quae ab asperiores impedit! 
                    Tempora repellat natus ut ab quasi itaque sunt adipisci, 
                    eligendi, culpa quos tenetur. Quae porro pariatur commodi
                     dolorum!</p>
                    
        </>
    );
}

export default Navbar;
