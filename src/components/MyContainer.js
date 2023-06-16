import React from "react";
import MyPicture from '../images/me.png'

const MyContainer = () => {
    return(
        <div className="myContainer">
            <div className="myCard">
                <div className="myContent">
                    <h2>ALEXIS BOUCOUVALS</h2>
                    <p>Hi! My name is Alexis, I'm 21 and am going into my senior year of college to complete my bachelors degree in Computer Information Systems. I love art, cars, music, dogs, and tattoos.</p>
                </div>
                <img className="me" src={MyPicture} width="45%" height="120%"/>
            </div>
        </div>
    )
}

export default MyContainer