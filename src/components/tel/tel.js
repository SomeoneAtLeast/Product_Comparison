import React from "react";
import {connect} from "react-redux"

import "./tel.scss";

const Tel = () => {
    return (
        <div className="tel">
            +7 (351) 701-03-37
        </div>
    )
}



export default connect()(Tel);