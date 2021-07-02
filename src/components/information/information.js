import React from "react";
import {connect} from "react-redux"

import "./information.scss";

import tick from "../../global-imgs/tick.svg"

const Information = () => {
    return (
        <div className="information">
            <span className="information__text">Информация</span>
            <img 
                className="information__img-tick"
                src={tick}
                width="7"
                alt="Развернуть/свернуть"/>
                <div className="information__text-border"/>
        </div>
    )
}



export default connect()(Information);