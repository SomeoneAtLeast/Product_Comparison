import React from "react";
import {connect} from "react-redux"

import "./city.scss";

import pointer from "./pointer.png"
import tick from "../../global-imgs/tick.svg"

const City = () => {
    return (
        <div className="city">
            <img 
                className="city__img-pointer"
                src={pointer}
                alt="Указатель города"/>
            <span className="city__text">Челябинск</span>
            <img 
                className="city__img-tick"
                src={tick}
                width="7"
                alt="Развернуть/свернуть"/>
        </div>
    )
}



export default connect()(City);