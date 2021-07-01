import React from "react";
import {connect} from "react-redux"

import "./search-panel.scss";

const SearchPanel = () => {
    return (
        <div className="search-panel">
            <input 
                className="search-panel__input"
                type="text"
                placeholder="Искать технику"/>
        </div>
    )
}



export default connect()(SearchPanel);