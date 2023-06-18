import React from "react";
import '../styling/Footer.css';
import Contact from "./Contact";

const Footer = () => {
    return(
        <div className='footer'>
            <p id="contact">GET IN TOUCH</p>
            <Contact />
        </div>
    )
}

export default Footer