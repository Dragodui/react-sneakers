import React, {useEffect, useState} from 'react';
import like from "../img/liked.svg";
import unliked from "../img/unliked.svg";
import addToCart from "../img/btn-plus.svg";
import addedToCart from "../img/btn-checked.svg";
import { Link } from 'react-router-dom';

const SneakerItem = ({
    title,
    img,
    price,
    item,
    setCart,
    setFavorite
}) => {

    const [isLiked, setIsLiked] = useState(false);
    const [isInCart, setIsInCart] = useState(false);

    const handleLike = (item, e) => {
        e.preventDefault();
        setFavorite(prevFavorites => {
            const isItemLiked = prevFavorites.some(i => i.id === item.id);
            let updatedFavorites = [];

            if (isItemLiked) {
                updatedFavorites = prevFavorites.filter(i => i.id !== item.id);
            } else {
                updatedFavorites = [...prevFavorites, item];
            }

            localStorage.setItem('favorite_' + item.id, JSON.stringify(!isItemLiked));
            return updatedFavorites;
        });

        setIsLiked(prevIsLiked => !prevIsLiked);
    };

    const handleAddingToCart = (item, e) => {
        e.preventDefault();
        setCart(prevCart => {
            const isItemInCart = prevCart.some(i => i.id === item.id);
            let updatedCart = [];
            if (isItemInCart) {
                updatedCart = prevCart.filter(i => i.id !== item.id);
            } else {
                updatedCart = [...prevCart, item];
            }
            localStorage.setItem('cart_' + item.id, JSON.stringify(!isItemInCart));
            return updatedCart;
        });
        setIsInCart(prevIsInCart => !prevIsInCart);
    };

    useEffect(() => {
        const storedFavorites = localStorage.getItem('favorite_' + item.id);
        if (storedFavorites) {
            setIsLiked(JSON.parse(storedFavorites));
        }
        const storedCart = localStorage.getItem('cart_' + item.id);
        if (storedCart) {
            setIsInCart(JSON.parse(storedCart));
        }
    }, [item]);

    return (
        <Link to={`/${item.id}`} className="sneakers__sneaker sneaker">
           <div className="sneaker__likearea">
               <button onClick={e => {
                    handleLike(item, e);
                }} className="sneakers__like">
                   <img src={isLiked ? like : unliked} alt=""/>
               </button>

           </div>
            <img src={img} alt="" className="sneaker__img"/>
            <div className="sneaker__title">{title}</div>
            <div className="sneaker__priceblock">
                <div className="sneaker__price">PRICE: <br/><span>{price} $</span></div>
                {<button onClick={e => {
                    handleAddingToCart(item, e);
                }}><img src={isInCart ? addedToCart: addToCart} alt=""/></button>}
            </div>
        </Link>
    );
};

export default SneakerItem;