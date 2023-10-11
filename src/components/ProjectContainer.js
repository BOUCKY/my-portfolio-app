import React, {useState, useEffect} from "react";
import '../styling/Projects.css'
import projectData from '../project_data';
import Project from "./Project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectContainer = () => {
    useEffect(() => {
        document.title="Alexis Boucouvalas | Projects"
    }, [])

    const [search, setSearch] = useState('')
    const filteredProjectData = projectData.filter((projectSearchObject) => {
        return projectSearchObject.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    })

    const sortedProjectData = filteredProjectData.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });

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
                {sortedProjectData.map( projectObject => { 
                    return(
                        <Project 
                        key={ projectObject.id } 
                        image={projectObject.image}
                        title={ projectObject.title }
                        link={ projectObject.link}
                        preview={projectObject.preview} 
                        date={projectObject.date}
                        githubLink={projectObject.githubLink}
                        /> 
                    )
                })}
            </div>
        </div>
    )
}

export default ProjectContainer