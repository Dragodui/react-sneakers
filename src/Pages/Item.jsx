import React from 'react';
import { useParams } from 'react-router-dom';
import sneakers from '../sneakersList';
import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Item = ({
    setCart,
    setFavorite
}) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    const { id } = useParams();
    const item = sneakers[id-1];
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

    return (
        <div className="item" style={{padding:"0 15px"}}>
            <div className="item__left">
                <h1>{item.title}</h1> 
                <Slider {...settings} className='slider'>
                    <div className='slider'>
                        <div className='slider'>
                            <img src={item.img} alt="" />
                        </div>
                    </div>
                    <div className='slider'>
                        <div className='slider'>
                            <img src={item.img} alt="" />
                        </div>
                    </div>
                    <div className='slider'>
                        <div className='slider'>
                            <img src={item.img} alt="" />
                        </div>
                    </div>
                </Slider>
            </div>
            <div className="item__right">
                <p style={{fontWeight:600, fontSize:30}}>Price: {item.price}$</p>
                <div className="item__buttons">
                    <button onClick={
                        e => handleAddingToCart(item, e)
                    } className={`item__button item__cart ${isInCart ? "item__inCart" :  ""}`}>Add to cart
                    </button>
                    <button onClick={
                        e => handleLike(item, e)
                    } className={`item__button item__fav ${isLiked ? "item__liked" : ""}`}>Add to favorite
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Item;