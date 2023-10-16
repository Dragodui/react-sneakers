import React, {useEffect, useState} from 'react';
import PagesHeader from "../components/PagesHeader";
import SneakersList from "../components/SneakersList";
import smile from "../img/sad2.png";
import Empty from "../components/UI/Empty/Empty";

const Favorite = ({
    favorite,
    setCart,
    setFavorite
}) => {


    return (
        <div className="favorite">
            {
                favorite.length
                    ?
                       <>
                           <PagesHeader
                               title = "Favorite:"
                               link={"/"}
                           />
                           <div className="favorite__list">
                               <SneakersList
                                   style={{margin:0}}
                                   sneakers={favorite}
                                   setCart={setCart}
                                   setFavorite={setFavorite}
                               />
                           </div>
                       </>
                    : <Empty title="You have no favorite yet" img={smile}/>
            }
        </div>
    );
};

export default Favorite;