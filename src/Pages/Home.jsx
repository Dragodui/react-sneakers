import React, {useState} from 'react';
import Banner from "../components/Banner";
import SneakersList from "../components/SneakersList";
import sneakers from "../sneakersList";
import Loader from "../components/UI/Loader/Loader";

const Home = ({
    setCart,
    setFavorite,
    isLoading
}) => {

    const [sneakersList, setSneakersList] = useState(sneakers);



    return (
        <div style={{padding:"0 15px"}}>
            <Banner/>
            <h1 style={{margin:"30px 0"}}>All snickers</h1>
            {
                isLoading
                    ?   <Loader/>
                    :   <SneakersList
                            sneakers = {sneakersList}
                            setCart={setCart}
                            setFavorite={setFavorite}
                        />
            }
        </div>
    );
};

export default Home;