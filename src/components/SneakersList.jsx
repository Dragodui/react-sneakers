import SneakerItem from "./SneakerItem";

const SneakersList = ({
     sneakers,
     setCart,
     setFavorite
}) => {

    return (
        <div className="list">
            <div className="list__sneakers sneakers">
                {
                    sneakers.map((item) =>
                        <SneakerItem
                            item = {item}
                            key={item.id}
                            img={item.img}
                            title={item.title}
                            price={item.price}
                            setCart={setCart}
                            setFavorite={setFavorite}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default SneakersList;