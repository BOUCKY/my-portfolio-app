import React, {useEffect} from "react";
import '../styling/Home.css'
import Headshot from '../images/Headshot.JPG'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faJs, faReact, faPython, faPhp } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from "@fortawesome/free-solid-svg-icons";



const Home = () => {
    useEffect(() => {
        document.title="Alexis Boucouvalas"
    }, [])
    return(
        <div className="Home">
            <div className="my-div">
                <img className='headshot' src={Headshot} alt="Headshot"></img>
                <div className="my-info">
                    <h1 className="title">ALEXIS BOUCOUVALAS</h1>
                    <p className="software-engineer">SOFTWARE ENGINEER</p>
                    <p className="why">I REALLY ENJOY BEING A SOFTWARE ENGINEER BECAUSE IT ALLOWS ME TO INDULGE IN MY LOVE FOR CREATIVITY AND PROBLEM-SOLVING. THE FIELD OFFERS ME THE PERFECT BLEND OF BEING ABLE TO CREATE INNOVATIVE SOLUTIONS WHILE TACKLING COMPLEX CHALLENGES. AS A SOFTWARE ENGINEER, I FIND IMMENSE SATISFACTION IN TRANSFORMING ABSTRACT CONCEPTS INTO TANGIBLE PRODUCTS OR APPLICATIONS THAT CAN MAKE A MEANINGFUL IMPACT ON PEOPLE'S LIVES. THE ABILITY TO ENVISION, DESIGN, AND BUILD SOMETHING FROM SCRATCH FILLS ME WITH A SENSE OF ACCOMPLISHMENT AND FUELS MY PASSION EVEN FURTHER.</p>
                    <p className="stack">THE STACK</p>
                    <div className="logo-container">
                        <div id="stack-logos">
                            <FontAwesomeIcon icon={faHtml5} size="2x" />
                            <FontAwesomeIcon icon={faCss3Alt} size="2x" />
                            <FontAwesomeIcon icon={faJs} size="2x" />
                            <FontAwesomeIcon icon={faReact} size="2x" />
                            <FontAwesomeIcon icon={faPython} size="2x" />
                            <FontAwesomeIcon icon={faDatabase} size="2x" />
                            <FontAwesomeIcon icon={faPhp} size="2x" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home