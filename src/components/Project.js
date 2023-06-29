import React from "react";

const Project = ({image, title, link, preview, date }) => {
    return(
        <div className="projectContent">
            <div className="projectImageContainer">
                <img className="projectImage" src={image} alt=" " />
            </div>
            <div className="projectText">
                <a className='projectLink' href={link}>{title}</a>
                <p className="preview">{preview}</p>
                <p className="date">{date}</p>
            </div>
        </div>                       
    )
}

export default Project