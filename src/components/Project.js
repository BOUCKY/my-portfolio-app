import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHammer } from "@fortawesome/free-solid-svg-icons";

const Project = ({image, title, link, date }) => {
    return(
        <div className="projectContent">
            <div className="projectImageContainer">
                {/* <img className="projectImage" src={image} alt=" " /> */}
            </div>
            <div className="projectText">
                <a className='projectLink' href={link}>{title}<FontAwesomeIcon icon={faHammer} className="hammer"/></a>
                <p className="date">{date}</p>
            </div>
        </div>                       
    )
}

export default Project