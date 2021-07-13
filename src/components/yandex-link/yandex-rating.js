import React from "react";
import {connect} from "react-redux";

import "./yandex-rating.scss";

import yandexRating from "./yandex-rating.png";
import star from "./star.svg";
import halfStar from "./half-star.png";

const YandexRating = () => {

    const getStras = (numberOfStars, numberOfHalfStars) => {
        let stars = [];
        let starsInArr = 1;

        while (starsInArr <= numberOfStars) {
            stars.push(
                <img
                    className="yandex-rating__stars-img"
                    src={star}
                    key={starsInArr}
                    alt="Звезда"/>
            )

            starsInArr++
        }

        let halfStarsInArr = 1;

        while (halfStarsInArr <= numberOfHalfStars) {
            stars.push(
                <img
                    className="yandex-rating__stars-img"
                    src={halfStar}
                    key={halfStarsInArr + 100}
                    alt="Половина звезды"/>
            )

            halfStarsInArr++
        }

        return stars
    }

    return (
        <div className="yandex-rating">
            <img
                className="yandex-rating__img"
                src={yandexRating}/>
            <div className="yandex-rating__stars">
                {getStras(4, 1)}
            </div>
            <span className="yandex-rating__triangle">▼</span>
        </div>
    )
}

export default connect()(YandexRating);