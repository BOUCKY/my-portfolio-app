import React from "react";

const Project = ({image, title, link, date }) => {
    return(
        <div className="projectContent">
            <div className="projectImageContainer">
                {/* <img className="projectImage" src={image} alt=" " /> */}
            </div>
            <div className="projectText">
                <a className='projectLink' href={link}>{title}</a>
                <p>{date}</p>
            </div>
        </div>                       
    )
}

export default Project