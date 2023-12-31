import React, {useEffect, useState} from 'react';
import SneakersList from "../components/SneakersList";
import {Link} from "react-router-dom";
import Empty from "../components/UI/Empty/Empty";
import smile from "../img/sad.png"
import Loader from "../components/UI/Loader/Loader";
import PagesHeader from "../components/PagesHeader";
import Button from "../components/UI/Button/Button";

const Orders = ({
    setCart,
    orders,
    setFavorite
}) => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (orders) setIsLoading(false);
    }, [orders]);

    return (
        <>
            {
                isLoading
                    ? <Loader/>
                    : <div style={{padding:"0 15px"}} className="orders">
                        {
                            orders.length
                                ? <div className="orders__inner">
                                   <PagesHeader title="My orders:" link={"/"}/>
                                    <div className="orders__list list">
                                        {
                                            orders.map((order, index) =>
                                                <div key={index} className="orders__order order">
                                                    <h2>Order: #{index+1}</h2>
                                                    <div className="orders__orderinner">
                                                        {
                                                            <SneakersList
                                                                style={{margin:0}}
                                                                sneakers={order}
                                                                setCart={setCart}
                                                                setFavorite={setFavorite}
                                                            />
                                                        }
                                                        <Link to={`${index+1}`}>
                                                            <Button style={{padding: 20}}>
                                                                About order
                                                            </Button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                                : <Empty title="You have no orders yet" img={smile}/>
                        }
                     </div>
            }
        </>
    );
};

export default Orders;