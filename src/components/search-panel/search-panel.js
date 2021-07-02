import React from "react";
import {connect} from "react-redux"

import "./search-panel.scss";

import magnifier from "./magnifier.png"

const SearchPanel = () => {
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
            </button>    
        </form>
    )
}



export default connect()(SearchPanel);