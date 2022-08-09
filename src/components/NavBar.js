import React from "react";
import './NavBar.css'

function Navbar() {
    
    return (

            <div class="topnav">
                <p className="newsapp"><b> My News App</b></p>
                <a class="active" href="#home"><b>Home</b></a>
                <a href="#news"><b>News</b></a>

            <div class="topnav-right">
                <a href="#about"><b>About</b></a>
                <a href="#contact"><b>Contact</b></a>

            </div>
            </div>
    );
}

export default Navbar;