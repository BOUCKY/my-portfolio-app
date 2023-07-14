import React, { useState } from "react";
import '../styling/NavBar.css'
// import Resume from "./Resume";
import MyResume from '../AlexisBoucouvalasResume.pdf'
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
                <li className="nav-bar-list"><NavLink className="nav-bar-link" to="/" onClick={handleNavClick}>HOME</NavLink></li>
                <li className="nav-bar-list"><NavLink className="nav-bar-link" to="about" onClick={handleNavClick}>ABOUT</NavLink></li>
                <li className="nav-bar-list"><NavLink className="nav-bar-link" to="blog" onClick={handleNavClick}>BLOGS</NavLink></li>
                <li className="nav-bar-list"><NavLink className="nav-bar-link" to="projects" onClick={handleNavClick}>PROJECTS</NavLink></li>
                <li className="nav-bar-list"><a className="nav-bar-link" href={MyResume}>RESUME</a></li>
            </div>
        </div>
    )
}

export default NavBar