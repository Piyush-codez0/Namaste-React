import RestaurantCard from "./RestaurantCard";
import { res_data } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [restaurants, setRestaurants] = useState(res_data);

    const topRatedRest = () => {
        const topRated = res_data.filter((data) => data.info.avgRating > 4);
        setRestaurants(topRated);
    };

    const fastDelivery = () => {
        const fD = res_data.filter((data) => data.info.sla.deliveryTime < 30);
        setRestaurants(fD);
    };

    const reset = () => {
      setRestaurants(res_data)
    };

  return (
    <div id="main">
      <div id="searchbutton">
        <button onClick={topRatedRest}>Top Rated Restaurants</button>
        <button onClick={fastDelivery}>Fast Delivery Restaurants</button>
        <button onClick={reset}>Reset filters</button>
      </div>

      <div id="res-container">
        {restaurants.map((res_data) => (
          <RestaurantCard
            key={res_data.info.id}
            restaurants={res_data}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
