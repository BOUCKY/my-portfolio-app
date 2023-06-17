import React from "react";


const ScrollToTop = () => {
    const toTop = () => window.scrollTo({top:0, behavior: 'smooth'});
    return(
        <div className="backTool">
            <div className="arrowIcon">
                <div className="tooltip">Bring to Top</div>
                <button className="backToTop" onClick={toTop}><i className="fa fa-arrow-up fa-2xl" aria-hidden="true"></i></button>
            </div>
        </div>
    )
}

export default ScrollToTop