import React, { useState } from "react";
import '../styling/Blog.css'
import Blog from './Blog'
import blogData from '../blog_data'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDev } from '@fortawesome/free-brands-svg-icons';


const BlogContainer = () => {

    const [search, setSearch] = useState('')
    const filteredBlogData = blogData.filter((blogSearchObject) => {
        return blogSearchObject.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    })

    return(
        <div className='Blogs'>
            <div className="blogHeader">
                <div className="blog-title">BLOGS</div>
                <div className='devLogo'>
                    <a className="devLogo" href="https://dev.to/boucky"><FontAwesomeIcon icon={faDev} size="2x" /></a>
                </div>
            </div>
            <div className="search-container">
                <input
                    className="search-bar"
                    type="text"
                    placeholder="SEARCH FOR BLOGS . . ."
                    value={search}
                    onChange={event => setSearch(event.target.value)}
                />
            </div>
            <div className="blogCard">
                {filteredBlogData.map( blogObject => { 
                    return(
                        <Blog 
                        key={ blogObject.id } 
                        image={blogObject.image}
                        title={ blogObject.title }
                        link={ blogObject.link} 
                        date={blogObject.date}
                        /> 
                    )
                })}
            </div>
    </div>
    )
}

export default BlogContainer