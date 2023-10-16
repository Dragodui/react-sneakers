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
        <div className="homepage">
            <Banner/>
            <h1>All sneakers</h1>
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