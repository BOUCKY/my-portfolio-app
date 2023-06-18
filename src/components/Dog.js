import React from "react";

const Dog = ({name, content, image}) => {
    return(
        <div className='card'>
            <div className="dogContent">
                <h2>{name}</h2>
                <p>{content}</p>
            </div>
            <img className='dog' src={image} height={225} width={225} alt="dog"></img>                              
        </div>
    )
}

export default Dog