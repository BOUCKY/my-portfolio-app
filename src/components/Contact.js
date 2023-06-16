import React from "react";

const Contact = () => {
    return (
        <div className="foot-div">
            <ul className="footer-list">
                <li>Phone     <i className="fa fa-phone" aria-hidden="true"></i></li>
                <li><a class="phoneNum" href="tel:603-321-4695">(603)-321-4695</a></li>
            </ul>
            <ul className="footer-list">
                <li>Email     <i className="fa fa-envelope" aria-hidden="true"></i></li>
                <li><a class="email" href="mailto:alexisbou16@gmail.com">alexisbou16@gmail.com</a></li>
            </ul>
            <ul className="footer-list">
                <li>LinkedIn     <i className="fa fa-linkedin" aria-hidden="true"></i></li>
                <li><a class="linkedIn" href="https://linkedin.com/in/alexis-boucouvalas-15aba6231">Alexis Boucouvalas</a></li>
            </ul>
        </div>
    )
}

export default Contact