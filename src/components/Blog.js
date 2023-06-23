import React from "react";

const Blog = ({image, title, link, date, minutes, preview}) => {
    return(
        <div className="blogContent">
            <div className="blogImageContainer">
                <img className="blogImage" src={image} alt="Blog" />
            </div>
            <div className="blogText">
                <a className='blogLink' href={link}>{title}</a>
                <p className="preview">{preview}</p>
                <p className="dateAndMinutes">{date}      •      {minutes}</p>
            </div>
        </div>                       
    )
}

export default Blog