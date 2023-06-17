import React from "react";

const Blog = ({image, title, date }) => {
    return(
        <div className='blogCard'>
            <div className="blogContent">
                <img>{image}</img>
                <h2>{title}</h2>
                <p>{date}</p>
            </div>                       
        </div>
    )
}

export default Blog