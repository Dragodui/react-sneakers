import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import Loader from "../components/UI/Loader/Loader";
import SneakersList from "../components/SneakersList";
import PagesHeader from "../components/PagesHeader";
import Button from "../components/UI/Button/Button";

const Order = ({
    orders,
    setCart,
    setFavorite,
    setOrders
}) => {

        const { index } = useParams();
        const order = orders[index-1] || [];

        const [totalCost, setTotalCost] = useState(0);

        const countTotalCost = () => {
            if (Array.isArray(order) && order.length > 0) {
                for (let sneaker of order) {
                    setTotalCost(prevState => prevState + sneaker.price);
                }
            }
        };


        const deleteOrder = () => {
            const updatedOrders = orders.filter((_, idx) => idx !== index - 1);
            setOrders(updatedOrders);

            localStorage.setItem('orders', JSON.stringify(updatedOrders));
        };

        useEffect(() => {
            countTotalCost();
        }, order)

        return (
        <div className="orderPage">

            <PagesHeader
                title={`Order #${index}`}
                link={"/orders"}
            />
            {
                !orders.length
                    ? <Loader/>
                    : <SneakersList
                        sneakers = {order}
                        setCart={setCart}
                        setFavorite={setFavorite}
                    />
            }
            <div className="orderPage__hr"></div>
           <div className="orderPage__footer">
               <div className="orderPage__prices">
                   <div className="orderPage__tax orderPage__text">
                       <span>Tax 5%: </span>{totalCost*0.05}$
                   </div>
                   <div className="orderPage__total orderPage__text">
                       <span>Total: </span>{totalCost}$
                   </div>
               </div>
               <div className="orderPage__delete">
                   <Link onClick={deleteOrder} to="/orders"><Button>Delete order</Button></Link>
               </div>
           </div>
        </div>
    );
};

export default Order;