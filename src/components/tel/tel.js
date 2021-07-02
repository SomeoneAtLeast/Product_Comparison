import React from "react";
import {connect} from "react-redux"
import {useResponsive} from "../../hooks/responsive.hook"

import "./tel.scss";

import phone from "./phone.png"

const Tel = () => {
    let number = "+7 (351) 701-03-37";
    const {isMobile, isTablet} = useResponsive();

    if (isTablet) number = "+7 351 701 40 87";

    return (
        <div className="tel">
            {isMobile ? null :
                <img 
                    className="tel__img"
                    src={phone}
                    alt="Трубка"/>}
            <span className="tel__text">{number}</span>
        </div>
    )
}



export default connect()(Tel);