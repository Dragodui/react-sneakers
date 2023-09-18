import React, {useState} from 'react';
import headerLogo from "../img/logo.png";
import cart from "../img/cart.svg";
import favorite from "../img/heart.svg";
import account from "../img/user.svg";
import { Link } from 'react-router-dom';

const Header = ({cartValue, setIsCartOpened}) => {

    const [isMenu, setIsMenu] = useState(false);

    const openMenu = () => {
        setIsMenu(true);
    };

    const closeMenu = () => {
        setIsMenu(false);
    };


    return (
        <header className="header">
            <div className="header__container">
                <Link style={{textDecoration:'none'}} to="/" className="header__logo">
                    <img src={headerLogo} alt=""/>
                    <p><span>React Sneakers</span><br/>Store for the best sneakers</p>
                </Link>
                <nav className="header__nav">
                    <a onClick={() => {
                        setIsCartOpened(true);
                    }}><img src={cart} alt=""/>{cartValue*1.05} $</a>
                    <Link to='/favorite'><img src={favorite} alt=""/></Link>
                    <Link to='/orders'><img src={account} alt=""/></Link>
                </nav>
                <div className="header__menuicon" onClick={openMenu}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
            <div className={isMenu ? "header__menu active" : "header__menu"}>
                <button onClick={closeMenu} className="header__menuclose">
                    ✖
                </button>
               <div className="header__menunav">
                   <a onClick={() => {
                       setIsCartOpened(true);
                       setIsMenu(false);
                   }}><img src={cart} alt=""/>Cart</a>
                   <Link onClick={() => setIsMenu(false)} style={{textDecoration:"none"}} to='/favorite'><img src={favorite} alt=""/>Favorites</Link>
                   <Link onClick={() => setIsMenu(false)} style={{textDecoration:"none"}} to='/orders'><img src={account} alt=""/>Orders</Link>
               </div>
            </div>
            <div className="header__cart"></div>
        </header>
    );
};

export default Header;