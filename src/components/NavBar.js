import React from "react";
import '../styling/NavBar.css'
import Projects from "./Projects";
import Resume from "./Resume";

const NavBar = () => {
    return(
        <div className='header'>
            <div className="nav-bar">
                <li className="nav-bar-list"><a className="nav-bar-link" href="../public/index.html">Home</a></li>
                <li className="nav-bar-list"><a className="nav-bar-link" href="../public/about.html">About</a></li>
                <li className="nav-bar-list"><a className="nav-bar-link" href="../public/blog.html">Blog</a></li>
                <Projects />
                <Resume />
            </div>
        </div>
    )
}

export default NavBar