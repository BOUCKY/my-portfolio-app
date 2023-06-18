import React from "react";

const Project = ({image, title, link, date }) => {
    return(
        <div className="projectContent">
            <img className="projectImage" src={image} alt="Project" />
            <div className="projectText">
                <a className='projectLink' href={link}>{title}</a>
                <p>{date}</p>
            </div>
        </div>                       
    )
}

export default Project