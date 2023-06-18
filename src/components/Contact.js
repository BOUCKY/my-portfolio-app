import React from "react";

const Contact = () => {
    return (
        <div className="foot-div">
            <ul className="footer-list">
                <li>EMAIL     <i className="fa fa-envelope" aria-hidden="true"></i></li>
                <li><a class="email" href="mailto:alexisbou16@gmail.com">ALEXISBOU16@GMAIL.COM</a></li>
            </ul>
            <ul className="footer-list">
                <li>PHONE     <i className="fa fa-phone" aria-hidden="true"></i></li>
                <li><a class="phoneNum" href="tel:603-321-4695">(603)-321-4695</a></li>
            </ul>
            <ul className="footer-list">
                <li>LINKEDIN     <i className="fa fa-linkedin" aria-hidden="true"></i></li>
                <li><a class="linkedIn" href="https://linkedin.com/in/alexis-boucouvalas-15aba6231">ALEXIS BOUCOUVALAS</a></li>
            </ul>
        </div>
    )
}

export default Contact