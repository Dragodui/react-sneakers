import React from 'react';
import {Link} from "react-router-dom";
import backButton from "../img/btn-back.svg";

const PagesHeader = ({title, link}) => {

    return (
        <div className="orders__header">
            <Link to={link}>
                <img src={backButton} alt=""/>
            </Link>
            <h1>{title}</h1>
        </div>
    );
};

export default PagesHeader;