import React from "react";
import {HashRouter as Router, Link} from "react-router-dom";
import {connect} from "react-redux"

import "./app.scss";

import Logo from "../logo";
import City from "../city";
import Tel from "../tel";
import SearchPanel from "../search-panel";

const App = () => {
    return (
        <Router>
            <div className = "app">
                <header className="header">
                    <Link 
                        className="header__logo-link"
                        to="/">
                            <Logo/>
                    </Link>
                    <div className="header__city-and-tel">
                        <Link className="header__city-and-tel-wrapper-link">
                            <City/>
                        </Link>
                        <Tel/>
                    </div>
                    <SearchPanel/>
                </header>
                <main className="main">
                </main>
            </div>
        </Router>
    )
}

const mapDispatchToProps = {

}


export default connect(null, mapDispatchToProps)(App);