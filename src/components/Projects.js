import React from "react";
import '../styling/Projects.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
    return(
        <div className='Projects'>
            <div className="projectHeader">
                <div className="project-title">PROJECTS</div>
                <div className='githubLogo'>
                    <a className="githubLogo" href="https://github.com/BOUCKY"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                </div>
            </div>
        </div>
    )
}

export default Projects