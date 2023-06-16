import React from "react";
import Dog from "./Dog";

const DogsContainer = ({dogsArray}) => {
    return(
        <div className="dogContainer">
            {dogsArray.map( dogObject => { 
                return(
                    <Dog 
                    key={ dogObject.name } 
                    name={ dogObject.name } 
                    content={dogObject.content}
                    image={dogObject.image}
                    /> 
                )
            })}
        </div>
    )
}

export default DogsContainer