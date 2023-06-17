import React from "react";
import '../styling/Blog.css'
import Blog from './Blog'
import blog from '../blog_data'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDev } from '@fortawesome/free-brands-svg-icons';

console.log(blog)

const BlogContainer = ({blog}) => {
    return(
        <div className='Blogs'>
        <div className="blogHeader">
            <div className="blog-title">BLOGS</div>
            <div className='devLogo'>
                <a className="devLogo" href="https://dev.to/boucky"><FontAwesomeIcon icon={faDev} size="2x" /></a>
            </div>
        </div>
        {/* <div className="bolgCard">
            {blog.map( blogObject => { 
                    return(
                        <Blog 
                            key={ blogObject.id } 
                            image={blogObject.image}
                            title={ blogObject.title } 
                            date={blogObject.date}
                        /> 
                    )
                })}
        </div> */}
    </div>
    )
}

export default BlogContainer