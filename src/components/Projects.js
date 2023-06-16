import React from "react";

const Projects = () => {
    return(
        <div className="dropdown">
            <button className="dropbtn">Projects</button>
            <div className="dropdown-content">
                <li><a href="#">GitHub     <i class="fa fa-github" aria-hidden="true"></i></a></li>
                <li><a className="github" href="https://github.com/BOUCKY">BOUCKY</a> </li>
            </div>
        </div>
    )
}

export default Projects