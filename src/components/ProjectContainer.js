import React from "react";
import '../styling/Projects.css'
import projectData from '../project_data';
import Project from "./Project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectContainer = () => {
    return(
        <div className='Projects'>
            <div className="projectHeader">
                <div className="project-title">PROJECTS</div>
                <div className='githubLogo'>
                    <a className="githubLogo" href="https://github.com/BOUCKY"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                </div>
            </div>
            <div className="projectCard">
                {projectData.map( projectObject => { 
                    return(
                        <Project 
                        key={ projectObject.id } 
                        image={projectObject.image}
                        title={ projectObject.title }
                        link={ projectObject.link} 
                        date={projectObject.date}
                        /> 
                    )
                })}
            </div>
        </div>
    )
}

export default ProjectContainer