import React from "react";
import '../styling/About.css';

import MyContainer from "./MyContainer";
import DogsContainer from "./DogsContainer";
import dogsData from "../dogs_data"


const About = () =>{
    return(
        <div className="About">
            <div className="greet"><h1>WHO IS ALEXIS BOUCOUVALAS?</h1></div>
            <MyContainer />
            <div className="meet"><h1>MEET THE DOGS</h1></div>
            <DogsContainer dogsArray={dogsData} />
        </div>
    )
}

export default About