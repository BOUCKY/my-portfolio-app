import React from "react";
import '../styling/NavBar.css'
import Resume from "./Resume";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return(
        <div className='header'>
            <div className="right-side-nav">
                <p>ALEXIS BOUCOUVALAS</p>
            </div>
            <div className="nav-bar">
                <li className="nav-bar-list"><NavLink className="nav-bar-link" to="/">HOME</NavLink></li>
                <li className="nav-bar-list"><NavLink className="nav-bar-link" to="about">ABOUT</NavLink></li>
                <li className="nav-bar-list"><NavLink className="nav-bar-link" to="blog">BLOG</NavLink></li>
                <li className="nav-bar-list"><NavLink className="nav-bar-link" to="projects">PROJECTS</NavLink></li>
                <Resume />
            </div>
        </div>
    )
}

export default NavBar