import React from "react";
import {HashRouter as Router, Link} from "react-router-dom";
import {connect} from "react-redux"
import {useResponsive} from "../../hooks/responsive.hook"

import "./app.scss";

import Logo from "../logo";
import City from "../city";
import Information from "../information";
import Tel from "../tel";
import SearchPanel from "../search-panel";
import Menu from "../menu";
import UserBtns from "../user-btns";
import WhiteServiceLink from "../white-service-link";

const App = () => {

    const {isMobile} = useResponsive();

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
                        <Link 
                            className="header__city-and-tel-wrapper-link"
                            to="">
                            <City/>
                        </Link>
                        {isMobile ? null : <Information/>}
                        <Tel/>
                    </div>
                    <SearchPanel/>
                    <Menu/>
                    <UserBtns/>
                    {isMobile ? null : <WhiteServiceLink/>}
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