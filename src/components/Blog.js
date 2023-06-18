import React from "react";

const Blog = ({image, title, link, date }) => {
    return(
        <div className="blogContent">
            <img className="blogImage" src={image} alt="Blog Image" />
            <div className="blogText">
                <a className='blogLink' href={link}>{title}</a>
                <p>{date}</p>
            </div>
        </div>                       
    )
}

export default Blog