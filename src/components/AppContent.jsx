import React, {useEffect, useState} from 'react';
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./Header";
import Cart from "./Cart";
import Modal from "./UI/Modal/Modal";
import Home from "../Pages/Home";
import Orders from "../Pages/Orders";
import Favorite from "../Pages/Favorite";
import Order from "../Pages/Order";
import Footer from "./Footer";
import Item from '../Pages/Item';

import "../style/cart.css";
import "../style/header.css";
import "../style/homepage.css";
import "../style/sneakers_list.css";
import "../style/elem.css";
import "../style/favorite.css";
import "../style/orders.css";
import "../style/footer.css";
import "../style/orderpage.css";


const AppContent = () => {

    const [cart, setCart] = useState([]);
    const [cartValue, setCartValue] = useState(0);
    const [isCartOpened, setIsCartOpened] = useState(false);
    const [orders, setOrders] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [favorite, setFavorite] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const savedFavorites = localStorage.getItem('favorites');
        const savedCart = localStorage.getItem('cart');
        const savedOrders = localStorage.getItem('orders');

        if (savedCart) setCart(JSON.parse(savedCart));
        if (savedFavorites) setFavorite(JSON.parse(savedFavorites));
        if (savedOrders) setOrders(JSON.parse(savedOrders));

        setIsLoading(false);
    }, []);


    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorite));
    }, [favorite]);

    useEffect(() => {
        localStorage.setItem('orders', JSON.stringify(orders));
    }, [orders]);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const countCartValue = () => {
        const total = cart.reduce((accumulator, item) => accumulator + item.price, 0);
        setCartValue(total);
    };

    useEffect(() => countCartValue(), [cart]);

    return (
        <Router>
            <Header
                cartValue = {cartValue}
                setIsCartOpened={setIsCartOpened}
            />
            <Cart
                setIsCartOpened={setIsCartOpened}
                isCartOpened={isCartOpened}
                cart={cart}
                cartValue={cartValue}
                setIsModalVisible={setIsModalVisible}
                setCart={setCart}
                orders={orders}
                setOrders={setOrders}
                setFavorite={setFavorite}
            />
            {
                isModalVisible
                    ? <Modal
                        setIsModalVisible={setIsModalVisible}
                        setIsCartOpened={setIsCartOpened}
                    />
                    : null
            }
            <Routes>
                <Route
                    exact path="/"
                    element = {
                        <Home
                            setCart={setCart}
                            setFavorite={setFavorite}
                            isLoading={isLoading}
                        />}
                />
                <Route
                    exact path="/orders"
                    element = {
                        <Orders
                            setCart={setCart}
                            orders = {orders}
                            setFavorite={setFavorite}
                        />
                    }
                />
                <Route
                    exact path="/favorite"
                    element = {
                        <Favorite
                            favorite={favorite}
                            setCart={setCart}
                            setFavorite={setFavorite}
                        />}
                />
                <Route
                        exact path="/:id"
                        element = {
                            <Item
                                setCart={setCart}
                                setFavorite={setFavorite}
                            />
                        }
                />
                <Route
                    exact path= "/orders/:index"
                    element = {
                        <Order
                            orders={orders}
                            setCart={setCart}
                            setFavorite={setFavorite}
                            setOrders={setOrders}
                        />
                    }
                />
            </Routes>
            <Footer/>
        </Router>
    );
};

export default AppContent;