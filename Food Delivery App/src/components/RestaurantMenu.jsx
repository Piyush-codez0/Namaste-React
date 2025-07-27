import { useEffect, useState } from "react";
import { FOOD_IMG_URL, MENU_API, RES_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const [menuItems, setMenuItems] = useState(null);

    const { resId } = useParams();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(RES_API + resId);
        const json = await data.json();
        const menuData = json.data;
        console.log(menuData);
        setMenuItems(menuData);
    };

    if (menuItems === null) return <Shimmer />;

    const {
        name,
        avgRating,
        totalRatingsString,
        costForTwoMessage,
        cuisines,
        locality,
        sla,
        id,
    } = menuItems?.cards[2]?.card?.card?.info;

    const { itemCards } =
        menuItems?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
            ?.card;

    const { title } =
        menuItems?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
            ?.card;

    console.log(itemCards);
    const noOfFoodItems = itemCards.length;
    return (
        <div id="Res-menu">
                <h1>{name}</h1>
            <div id="res-brief">
                <p>
                    {avgRating}({totalRatingsString}) {costForTwoMessage}{" "}
                </p>
                <p> {cuisines.join(", ")} </p>
                <p> Outlet {locality} </p>
                <p> {sla.slaString} </p>
            </div>

            <h5>MENU</h5>
            <h3>
                {title}({noOfFoodItems})
            </h3>

            {itemCards.map((items) => (
                <div id="foodItem-Container" key={items?.card?.info?.id}>
                    <h4>{items?.card?.info?.name}</h4>
                    <p>₹{items?.card?.info?.price / 100}</p>
                    <p>
                        {items?.card?.info.ratings?.aggregatedRating?.rating}(
                        {
                            items?.card?.info?.ratings?.aggregatedRating
                                ?.ratingCountV2
                        }
                        )
                    </p>
                    <p>{items?.card?.info.description}</p>
                    <img src={FOOD_IMG_URL + items?.card?.info.imageId} />
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default RestaurantMenu;
