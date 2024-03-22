import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <div className="foot-div">
            <ul className="footer-list">
                <li>EMAIL     <i className="fa fa-envelope" aria-hidden="true"></i></li>
                <li><a className="email" href="mailto:alexisbou16@gmail.com">ALEXISBOU16@GMAIL.COM</a></li>
            </ul>
            <ul className="footer-list">
                <li>PHONE     <i className="fa fa-phone" aria-hidden="true"></i></li>
                <li><a className="phoneNum" href="tel:603-321-4695">(603)-321-4695</a></li>
            </ul>
            <ul className="footer-list">
                <li>LINKEDIN     <i className="fa fa-linkedin" aria-hidden="true"></i></li>
                <li><a className="linkedIn" href="https://linkedin.com/in/alexis-boucouvalas-15aba6231">ALEXIS BOUCOUVALAS</a></li>
            </ul>
            <div className="mobile-foot">
                <ul className="mobile-footer-list">
                    <li><a className="email" href="mailto:alexisbou16@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a></li>
                </ul>
                <ul className="mobile-footer-list">
                    <li><a className="phoneNum" href="tel:603-321-4695"><FontAwesomeIcon icon={faPhone} /></a></li>
                </ul>
                <ul className="mobile-footer-list">
                    <li><a className="linkedIn" href="https://linkedin.com/in/alexis-boucouvalas-15aba6231"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Contact