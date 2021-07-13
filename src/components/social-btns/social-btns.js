import React from "react";
import {connect} from "react-redux"
import {Link} from "react-router-dom";

import "./social-btns.scss";

import whatsapp from "./whatsapp.png";
import viber from "./viber.png";
import telegram from "./telegram.png";

const SocialBtns = () => {

    const socials = [
        {
            name: "whatsapp",
            img: whatsapp,
            id: 1
        },
        {
            name: "viber",
            img: viber,
            id: 2
        },
        {
            name: "telegram",
            img: telegram,
            id: 3
        },
    ];

    return (
        <div className="social-btns">
            {socials.map((item) => {
                return (
                <Link 
                    className="social-btn"
                    to="/"
                    key={item.id}>
                    <img 
                        className="social-btn__img"
                        src={item.img}
                        alt={item.name}/>
                </Link>
                )
            })}
        </div>
    )
}

export default connect()(SocialBtns);