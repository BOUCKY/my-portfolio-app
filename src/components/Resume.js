import React from "react";
import MyResume from '../AlexisBoucouvalasResume.pdf'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Resume = () => {
    return(
        <div className="dropdown">
            <button className="dropbtn">RESUME</button>
            <div className="dropdown-content">
                <li>
                    <a href={MyResume} target="_blank" rel="noreferrer">DOWNLOAD     <FontAwesomeIcon icon={faDownload} aria-hidden='true' /></a>
                </li>
            </div>
        </div>
    )
}

export default Resume