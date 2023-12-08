import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Project = ({image, title, link, preview, date, githubLink }) => {
    return(
        <div className="projectContent">
            <div className="projectImageContainer">
                <img className="projectImage" src={image} alt=" " />
            </div>
            <div className="projectText">
                <a className='projectLink' href={link}  target="_blank" rel="noreferrer">{title}</a>
                <p className="preview">{preview}</p>
                <p className="date">{date} <a className="projectGuthub" href={githubLink}><FontAwesomeIcon icon={faGithub} /></a></p>
            </div>
        </div>                       
    )
}

export default Project