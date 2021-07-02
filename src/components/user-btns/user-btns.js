import React from "react";
import {connect} from "react-redux"
import {Link} from "react-router-dom";
import {useResponsive} from "../../hooks/responsive.hook"

import "./user-btns.scss";

import favorites from "./favorites.png";
import userAccount320 from "./user-account320.png";
import cart320 from "./cart320.png";
import numberOfProducts320 from "./number-of-products768.png";
import userAccount768 from "./user-account768.png";
import cart768 from "./cart768.png";
import numberOfProducts768 from "./number-of-products768.png";

const UserBtns = () => {

    const {isMobile, isTablet} = useResponsive();

    const btnsData = [
        // {
        //     name: "Сравнение",
        //     img: smartphone,
        //     id: 1
        // },
        {
            name: "Избранное",
            img: favorites,
            id: 2
        },
        {
            name: "Кабинет",
            img: isMobile ? userAccount320 : userAccount768,
            id: 3
        },
        {
            name: "Корзина",
            img: isMobile ? cart320 : cart768,
            id: 4
        },
    ];

    return (
        <ul className="user-btns">
        {
            btnsData.map((item) => {
                if (isTablet && item.name === "Избранное") return null

                return (
                    <li 
                        className="user-btns__item"
                        key={item.id}>
                            <Link 
                                className="user-btns__item-link"
                                to="/">
                                <img
                                    className="user-btns__item-link-img" 
                                    src={item.img}
                                    alt={item.name}/>
                                <span className="user-btns__item-link-text">
                                    {item.name}
                                </span> 
                            </Link>
                            <div className="user-btns__item-border"></div>
                            {item.name === "Корзина" ? <img
                                                            className="user-btns__item-cart-img" 
                                                            src={isMobile ? numberOfProducts320 : numberOfProducts768}
                                                            alt="Количество товаров в корзине"/>
                                                    :
                                                    null }
                            {item.name === "Корзина" ? <span className="user-btns__item-cart-number" >2</span> : null}
                    </li>
                    )
                }) 
            }
        </ul>
    )
}



export default connect()(UserBtns);