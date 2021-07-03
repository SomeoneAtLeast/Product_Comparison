import React from "react";
import {connect} from "react-redux"
import {Link} from "react-router-dom";
import {useResponsive} from "../../hooks/responsive.hook"

import "./user-btns.scss";

import favorites320 from "./favorites320.png";
import favorites1024 from "./favorites1024.png";
import userAccount320 from "./user-account320.png";
import cart320 from "./cart320.png";
import numberOfProducts320 from "./number-of-products768.png";
import userAccount768 from "./user-account768.png";
import cart768 from "./cart768.png";
import numberOfProducts768 from "./number-of-products768.png";
import сomparison1024 from "./сomparison1024.png";

const UserBtns = () => {

    const {isMobile, isTablet, isMiniPc} = useResponsive();

    const btnsData = [
        {
            name: "Сравнение",
            img: сomparison1024,
            id: 1
        },
        {
            name: "Избранное",
            img: isMiniPc ? favorites1024 : favorites320,
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
                if (isTablet && !isMiniPc && item.name === "Избранное") return null;
                if (!isMiniPc && item.name === "Сравнение") return null;

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
                            {(item.name === "Корзина" || (item.name === "Избранное" && isMiniPc)) ? <img
                                                            className={item.name === "Корзина" ? "user-btns__item-cart-img" : "user-btns__item-favorites-img"}
                                                            src={isMobile ? numberOfProducts320 : numberOfProducts768}
                                                            alt="Количество товаров в корзине"/>
                                                    :
                                                    null }
                            {(item.name === "Корзина" || (item.name === "Избранное" && isMiniPc)) ? <span
                                                                                                        className={item.name === "Корзина" ? "user-btns__item-cart-number": "user-btns__item-favorites-number"}>
                                                                                                            2
                                                                                                        </span> : null}
                    </li>
                    )
                }) 
            }
        </ul>
    )
}



export default connect()(UserBtns);