import React from "react";
import {connect} from "react-redux"

import "./logo.scss";

import logo from "./logo.png"

const Logo = () => {
    return (
        <img 
            src={logo}
            alt="Логотип"
            className="Logo"/>
    )
}



export default connect()(Logo);