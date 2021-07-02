import React from "react";
import {connect} from "react-redux"
import {useResponsive} from "../../hooks/responsive.hook"

import "./logo.scss";

import logo320 from "./logo320.png"
import logo768 from "./logo768.png"

const Logo = () => {
    const {isTablet} = useResponsive();

    let imgSrc = logo320;
    if (isTablet) imgSrc = logo768;

    return (
        <img 
            src={imgSrc}
            alt="Логотип"
            className="logo"/>
    )
}

export default connect()(Logo);