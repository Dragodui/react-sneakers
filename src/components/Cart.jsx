import React, {useState} from 'react';
import arrow from "../img/arrow.svg";
import box from "../img/empty-cart.jpg"
import Button from "./UI/Button/Button";
import SneakersList from "./SneakersList";

const Cart = ({
    cart,
    cartValue,
    isCartOpened,
    setIsCartOpened,
    setIsModalVisible,
    setCart,
    setOrders,
    setFavorite,
}) => {

    const [error, setError] = useState(false);

    const checkToOpenModal = () => {
        if (!cart.length) {
            setError(true);
        }
        else {
            setError(false);
            setIsModalVisible(true);
            let newOrders = [...JSON.parse(localStorage.getItem('orders')), cart];
            setOrders(newOrders);

            for (let i= 0;i<cart.length;i++) {
                localStorage.setItem('cart_' + cart[i].id, JSON.stringify(false));
            }

            localStorage.setItem('orders', JSON.stringify(newOrders));
            localStorage.setItem('cart', JSON.stringify([]));
            setCart([]);
        }
    };

    return (
        <div className={isCartOpened ? "cart show" : "cart hide"} onClick={() => {
            setIsCartOpened(false);
            setError(false);
        }}>
            <div className="cart__cart" onClick={e => e.stopPropagation()}>
               <div className="cart__header">
                   <p>
                       Cart:
                   </p>
                   <button onClick={() => {
                       setIsCartOpened(false);
                       setError(false);
                   }} className="cart__menuclose">
                       ✖
                   </button>
               </div>
                <div className="cart__elems">
                    {
                       cart.length
                            ?   <SneakersList
                               style={{margin:0}}
                               setCart={setCart}
                               sneakers={cart}
                               setFavorite={setFavorite}
                           />
                           : <div className="cart__empty">
                                   <img src={box} alt=""/>
                                    <h2>Cart is empty</h2>
                                    <p>Add at least one pair of sneakers to place an order.</p>
                                    <Button onClick={() => {
                                        setIsCartOpened(false);

                                        setError(false);
                                    }}><img style={{width:14, margin:0, transform:"rotate(180deg)"}} src={arrow} alt=""/><span>Back</span></Button>
                           </div>
                    }
                </div>
                <div className="cart__footer">
                    {
                        error
                            ? <div className="error">Add something to cart</div>
                            :<div></div>
                    }
                    <div className="cart__tax">
                        <p>Tax 5%: <span>{cartValue*0.05}$</span></p>
                    </div>
                    <div className="cart__total">
                        <p>Total: <span>{cartValue*1.05}$</span></p>
                    </div>
                    <Button onClick={checkToOpenModal}>
                        <p>Order</p> <img src={arrow} alt=""/>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Cart;