import React, {useEffect} from "react";
import '../styling/Home.css'
// import Headshot from '../images/Headshot.jpg'
import Headshot from '../images/Headshot2.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faJs, faReact, faPython } from '@fortawesome/free-brands-svg-icons';
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
                    <p className="why">AS A SOFTWARE ENGINEER, I FIND IMMENSE FULFILLMENT IN LEVERAGING MY CREATIVITY, PROBLEM-SOLVING SKILLS, AND PASSION FOR DESIGN. THE FIELD OFFERS THE PERFECT BALANCE, ALLOWING ME TO CRAFT INNOVATIVE SOLUTIONS WHILE TACKLING COMPLEX CHALLENGES. TRANSFORMING ABSTRACT IDEAS INTO TANGIBLE APPLICATIONS THAT HAVE A MEANINGFUL IMPACT ON PEOPLE'S LIVES BRINGS ME GREAT SATISFACTION. THE PROCESS OF ENVISIONING, DESIGNING, AND BUILDING FROM SCRATCH FUELS MY PASSION AND LEAVES ME WITH A PROFOUND SENSE OF ACCOMPLISHMENT.</p>
                    <p className="stack">THE STACK</p>
                    <div className="logo-container">
                        <div id="stack-logos">
                            <FontAwesomeIcon icon={faHtml5} size="2x" />
                            <FontAwesomeIcon icon={faCss3Alt} size="2x" />
                            <FontAwesomeIcon icon={faJs} size="2x" />
                            <FontAwesomeIcon icon={faReact} size="2x" />
                            <FontAwesomeIcon icon={faPython} size="2x" />
                            <FontAwesomeIcon icon={faDatabase} size="2x" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home