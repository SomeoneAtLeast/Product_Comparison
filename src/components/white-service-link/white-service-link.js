import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import "./white-service-link.scss";

import whiteService from "./white-service-logo.png";

const WhiteServiceLink = () => {

    return (
        <Link 
            className="white-service-link"
            to="/">
            <img
                className="white-service-link__img"
                src={whiteService}/>
        </Link>
    )
}

export default connect()(WhiteServiceLink);