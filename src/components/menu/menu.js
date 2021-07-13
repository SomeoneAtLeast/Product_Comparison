import React, {useState} from "react";
import {connect} from "react-redux"
import {Link} from "react-router-dom";
import {useResponsive} from "../../hooks/responsive.hook"

import "./menu.scss";

import smartphone from "./smartphone.png";
import tablet from "./tablet.png";
import smartDevices from "./smart-devices.png";
import gadgets from "./gadgets.png";
import audio from "./audio.png";
import other from "./other.png";
import menuBtn from "./menu-btn.png";
import tick from "../../global-imgs/tick.svg"

const Menu = () => {
    
    const {isMobile, isMediumPc} = useResponsive();

    const [showMenu, setShowMenu] = useState(false);
    let btnClassNames = "menu__btn";
    if (showMenu) btnClassNames += " menu__btn--active";

    let listClassNames = "menu__list";
    if (showMenu) listClassNames += " menu__list--active";

    let tickClassNames = "menu__img-tick";
    if (showMenu) tickClassNames += " menu__img-tick--active";

    const menuItems = [
        {
            name: "Смартфоны",
            img: smartphone,
            id: 1
        },
        {
            name: "Планшеты и ПК",
            img: tablet,
            id: 2
        },
        {
            name: "Умные устройства",
            img: smartDevices,
            id: 3
        },
        {
            name: "Гаджеты",
            img: gadgets,
            id: 4
        },
        {
            name: "Аудиотехника",
            img: audio,
            id: 5
        },
        {
            name: "Другое",
            img: other,
            id: 6
        },
    ];
    
    let menuText = isMobile ? "Меню" : "Каталог";

    return (
        <div 
            className="menu" 
            onClick={isMediumPc ? null : () => setShowMenu(!showMenu)}>
            <button 
                className={btnClassNames}>
                    {isMobile ? null : <img src={menuBtn} alt="Каталог"/>}
                </button>
            {isMediumPc ? null : <span className="menu__text">{menuText}</span>}
            {(isMobile || isMediumPc) ? null : <img 
                                    className={tickClassNames}
                                    src={tick}
                                    width="7"
                                    alt="Развернуть/свернуть"/>}
            <div className="menu__border"/>                       
            <ul className={listClassNames}>
                {
                   menuItems.map((item) => {
                    if (isMediumPc && item.name === "Аудиотехника") return
                    return (
                        <li 
                            className="menu__list-item"
                            key={item.id}>
                                <Link 
                                    className="menu__list-item-link"
                                    to="/">
                                    <img
                                        className="menu__list-item-link-img" 
                                        src={item.img}
                                        alt={item.name}/>
                                    {item.name}
                                    {isMediumPc ? <img 
                                    className="menu__list-item-link-tick"
                                    src={tick}
                                    width="7"
                                    alt="Развернуть/свернуть"/>
                                    :
                                    null}
                                </Link>
                        </li>
                    )
                   }) 
                }
            </ul>
        </div>
    )
}



export default connect()(Menu);