import React from 'react';
import classes from "./Modal.module.css"
import arrow from "../../../img/arrow.svg";
import order from "../../../img/complete-order.jpg"
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const Modal = ({setIsModalVisible, setIsCartOpened}) => {

    const navigate = useNavigate();

    return (
        <div className={classes.modal} onClick={() => {
            setIsModalVisible(false);
            setIsCartOpened(false);
            navigate('orders');
        }}>
            <div className={classes.modal__inner} onClick={e => e.stopPropagation()}>
                <div style={{textAlign:"center"}}>
                    <img className={classes.modal__img} src={order} alt=""/>
                </div>
                <p>Your order has been accepted!</p>
                   <Link
                       onClick={() => {
                        setIsModalVisible(false);
                        setIsCartOpened(false);
                        }}
                       className="gotoorders"
                       to="/orders">
                           <span>Go to my Orders</span> <img src={arrow}/>
                   </Link>
            </div>
        </div>
    );
};

export default Modal;