import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Design = ({ image, title, date, description }) => {

    const close = <FontAwesomeIcon icon={faTimes} size="2x" />
    const [showPopup, setShowPopup] = useState(false)

  const togglePopup = () => {
    setShowPopup(!showPopup)
  }

  return (
    <div className="designContainer">
        <div className="designContent">
            <div className="designImageContainer">
                <img className="designImage" src={image} alt="Design" onClick={togglePopup}/>
            </div>
            <div className="designText">
                <p className="designTitle">{title}</p>
                <p className="description">{description}</p>
                <p className="date">{date}</p>
            </div>
        </div>
        {showPopup && (
            <div className="popup" onClick={togglePopup}>
                <div className="popupInner">
                    <img className="popupImage" src={image} alt="Design Popup" />
                    <button className="closeButton" onClick={togglePopup}>{close}</button>
                </div>
            </div>
        )}
    </div>
  )
}

export default Design;
