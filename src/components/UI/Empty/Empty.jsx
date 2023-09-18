import React from 'react';
import classes from "./Empty.module.css"
import Button from "../Button/Button";
import arrow from "../../../img/arrow.svg"
import {Link} from "react-router-dom";

const Empty = ({img, title}) => {
    return (
        <div className={classes.empty}>
            <img className={classes.smile} src={img} alt=""/>
            <div className={classes.title}>
                {title}
            </div>
            <Link
                style={{textDecoration: "none"}}
                to="/">
                <Button style={{textDecoration:"none", padding:"18px 24px"}}>
                    <img style={{transform:"rotate(180deg)"}} src={arrow} alt=""/>Back to shop
                </Button>
            </Link>
        </div>
    );
};

export default Empty;