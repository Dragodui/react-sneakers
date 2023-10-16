import React from 'react';
import headerLogo from "../img/logo.png";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <Link style={{textDecoration:'none'}} to="/" className="header__logo">
                <img src={headerLogo} alt=""/>
                <p><span>React Sneakers</span><br/>Store for the best sneakers</p>
            </Link>
            <p className="footer__email">
                react-sneakers@gmail.com
            </p>
        </footer>
    );
};

export default Footer;