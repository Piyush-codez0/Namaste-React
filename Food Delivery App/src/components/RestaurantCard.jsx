import { Link } from "react-router-dom";
import { IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { restaurants } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, areaName, sla } =
        restaurants?.info;

    return (
        <div className="card-container">
            
                <div id="cards">
                    <img
                        className="food-image"
                        src={IMG_URL + cloudinaryImageId}
                        alt={name}
                    />
                    <h4>{name}</h4>
                    <p>[{cuisines.join(", ")}]</p>
                    <p>{areaName}</p>
                    <p>{sla.deliveryTime} minutes</p>
                    <p>Rating: {avgRating} of 5</p>
                </div>
        </div>
    );
};

export default RestaurantCard;
