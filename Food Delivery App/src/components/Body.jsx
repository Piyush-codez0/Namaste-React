import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { API } from "../utils/constants";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]); // For filtering
  const [searchText, setSearchText] = useState(""); // For search

  // Fetching Data from Swiggy API
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {

      const data = await fetch(API);
      const json = await data.json();
      const restaurantList = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setRestaurants(restaurantList);
      setAllRestaurants(restaurantList);
  };

  console.log("Body Rendered!")

  // Filter Top Rated Restaurants (rating > 4)
  const topRatedRest = () => {
    const topRated = restaurants.filter(
      (data) => data.info.avgRating > 4
    );
    setRestaurants(topRated);
  };

  // Filter fast delivery restaurants (DeliveryTime < 30min.)
  const fastDelivery = () => {
      const fD = allRestaurants.filter(
        (data) => data.info.sla.deliveryTime < 30
      );
      setRestaurants(fD);
  };

  // Reset btn to reset filters
  const reset = () => {
    setRestaurants(allRestaurants)
  };

  // Search Btn
  // const search = () => {
  //   console.log(searchText);
  //   const filteredRestaurants = restaurants.filter(
  //     (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
  //   )
  //   setRestaurants(filteredRestaurants);
   
  // }

  // LIVE FILTER: updates restaurant cards as you type
  useEffect(() => {
    const filtered = allRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setRestaurants(filtered);
  }, [searchText]); // runs when searchText changes

  
  return restaurants.length === 0 ? (
          <div className="shimmer-container">
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          </div>
        ) : (
    <div id="main">
      <div id="buttons">
        <button onClick={topRatedRest}>Top Rated Restaurants</button>
        <button onClick={fastDelivery}>Fast Delivery Restaurants</button>
        <button onClick={reset}>Reset filters</button>

        <input
            type="text"
            placeholder="Search for a Restaurant"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

      </div>

      <div id="res-container">
        {
          restaurants.map((data) => (
            <RestaurantCard
              key={data.info.id}
              restaurants={data}
            />
          ))
        }
      </div>
    </div>
  )
};

export default Body;
