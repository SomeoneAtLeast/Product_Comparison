import React from "react";
import {connect} from "react-redux"
import {useResponsive} from "../../hooks/responsive.hook"

import "./search-panel.scss";

import magnifier from "./magnifier.png"

const SearchPanel = () => {

    const {isMiniPc} = useResponsive();

    return (
        <form className="search-panel"> 
            <input 
                className="search-panel__input"
                type="text"
                placeholder="Искать технику"/>
            <button className="search-panel__btn">
                <img 
                    className="search-panel__btn-img"
                    src={magnifier}
                    alt="Поиск товаров"/>
                {isMiniPc ? <span className="search-panel__btn-text">Найти</span> : null}
            </button>    
        </form>
    )
}



export default connect()(SearchPanel);