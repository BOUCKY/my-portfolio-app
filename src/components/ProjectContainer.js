import React, {useState} from "react";
import '../styling/Projects.css'
import projectData from '../project_data';
import Project from "./Project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectContainer = () => {
    const [search, setSearch] = useState('')
    const filteredProjectData = projectData.filter((projectSearchObject) => {
        return projectSearchObject.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    })
    return(
        <div className='Projects'>
            <div className="projectHeader">
                <div className="project-title">PROJECTS</div>
                <div className='githubLogo'>
                    <a className="githubLogo" href="https://github.com/BOUCKY"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                </div>
            </div>
            <div className="search-container">
                <input
                    className="search-bar"
                    type="text"
                    placeholder="SEARCH FOR PROJECTS . . ."
                    value={search}
                    onChange={event => setSearch(event.target.value)}
                />
            </div>
            <div className="projectCard">
                {filteredProjectData.map( projectObject => { 
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