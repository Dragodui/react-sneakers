import React from 'react';
import { useParams } from 'react-router-dom';
import sneakers from '../sneakersList';
import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AddModal from '../components/AddModal';
import Loader from "../components/UI/Loader/Loader";

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
    const [isCartVisible, setIsCartVisible] = useState(false);
    const [isFavVisible, setIsFavVisible] = useState(false);


    const handleLike = (item, e) => {
        e.preventDefault();
        setIsFavVisible(true);
        setInterval(() => {
            setIsFavVisible(false);
        }, 3000);
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
        setIsCartVisible(true);
        setInterval(() => {
            setIsCartVisible(false);
        }, 3000);
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
            <AddModal
                isInList={isInCart}
                isVisible={isCartVisible}
                listName="cart"
            />
            <AddModal
                isInList={isLiked}
                isVisible={isFavVisible}
                listName="favorite"
            />
           {
            item
            ?   <>
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
                </>
            :   <Loader/>
           }
        </div>
    );
};

export default Item;