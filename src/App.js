import React, {useEffect} from 'react';
import {useState} from "react";
import "./style/style.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./Pages/Home";
import Orders from "./Pages/Orders";
import Cart from "./components/Cart";
import Modal from "./components/UI/Modal/Modal";
import Favorite from "./Pages/Favorite";
import Order from "./Pages/Order";


const App = () => {

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

        localStorage.setItem('cart', JSON.stringify(cart));

        }, [cart]);

    const countCartValue = () => {
        const total = cart.reduce((accumulator, item) => accumulator + item.price, 0);
        setCartValue(total);
    };

    useEffect(() => countCartValue(), [cart]);


    return (
        <div className="App">
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
                        exact path="/react-sneakers"
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
            </Router>
        </div>
    );
};

export default App;