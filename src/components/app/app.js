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
import YandexRating from "../yandex-link";

const App = () => {

    const {isMobile, isMiniPc} = useResponsive();

    return (
        <Router>
            <div className = "app">
                <header className="header">
                    <div className="header__content-wrapper">
                        <Link 
                            className="header__logo-link"
                            to="/">
                                <Logo/>
                        </Link>
                        <div className="header__about-company">
                            <Link 
                                className="header__about-company-wrapper-link"
                                to="/">
                                <City/>
                            </Link>
                            <Link 
                                className="header__about-company-wrapper-link"
                                to="/">
                                {isMiniPc ? <YandexRating/> : null}
                            </Link>
                            <Link 
                                className="header__about-company-wrapper-link"
                                to="/">
                                {isMobile ? null : <Information/>}
                            </Link>
                            <Tel/>
                        </div>
                        <SearchPanel/>
                        <Menu/>
                        <UserBtns/>
                        {isMobile ? null : <WhiteServiceLink/>}
                    </div>
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