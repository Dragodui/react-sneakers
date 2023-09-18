import React from 'react';
import brands from "../img/brands logos.png"
import frog from "../img/frog.png"
import Button from "./UI/Button/Button";

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner__container">
               <div className="banner__info">
                   <img style={{borderRadius:20}} src={brands} alt="" className="banner__brands"/>
                   <div className="banner__text">
                       <p><span>Stan Smith</span>,<br/> Forever!</p>
                       <Button>Buy now!</Button>
                   </div>
               </div>
                <img className="banner__frog" src={frog} alt=""/>
            </div>
        </div>
    );
};

export default Banner;