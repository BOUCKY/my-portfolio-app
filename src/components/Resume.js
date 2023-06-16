import React from "react";
import MyResume from '../AlexisBoucouvalasResume.pdf'

const Resume = () => {
    return(
        <div className="dropdown">
            <button className="dropbtn">Resume</button>
            <div className="dropdown-content2">
                <li>
                    <a href={MyResume}>Download     <i class="fa fa-download" aria-hidden="true"></i></a>
                </li>
            </div>
        </div>
    )
}

export default Resume