import React, { useState } from "react";
import '../styling/NavBar.css'
import Resume from "./Resume";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {
    
    const [navClick, setNavClick] = useState(false)
    const handleNavClick = () => {
        setNavClick(!navClick)
    }

    return(
        <div className='header'>
            <div className="right-side-nav">
                <p>ALEXIS BOUCOUVALAS</p>
            </div>
            <div>
                <button className="mobile" onClick={handleNavClick}>
                    {navClick ? <FontAwesomeIcon icon={faTimes} size="2x" /> : <FontAwesomeIcon icon={faBars} size="2x" />}
                </button>
            </div>
            <div className={`nav-bar ${navClick ? 'active' : ''}`}>
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