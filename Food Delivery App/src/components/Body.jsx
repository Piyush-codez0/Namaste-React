import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { API } from "../utils/constants";
import { useParams, Link } from "react-router-dom";


const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]); // For filtering
    const [searchText, setSearchText] = useState(""); // For search
    const [selectedFilter, setSelectedFilter] = useState("all");

    const {resId} = useParams();

    // Fetching Data from Swiggy API
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(API);
        const json = await data.json();
        const restaurantList =
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants;
        setRestaurants(restaurantList || []); // default to an empty array to avoid runtime errors.
        setAllRestaurants(restaurantList || []);
    };

    console.log("Body Rendered!");

    // LIVE FILTER: updates restaurant cards as you type
    useEffect(() => {
        const filtered = allRestaurants.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setRestaurants(filtered);
    }, [searchText]); // runs when searchText changes

    // DropDown Menu
    const handleFilterChange = (e) => {
        const value = e.target.value;
        setSelectedFilter(value);

        let filteredData = allRestaurants;

        if (value === "fastDelivery") {
            filteredData = allRestaurants.filter(
                (res) => res.info.sla.deliveryTime < 30
            );
        } else if (value === "4") {
            filteredData = allRestaurants.filter(
                (res) => res.info.avgRating >= 4
            );
        } else if (value === "3") {
            filteredData = allRestaurants.filter(
                (res) => res.info.avgRating >= 3
            );
        } else if (value === "all") {
            filteredData = allRestaurants;
        }

        setRestaurants(filteredData);
    };

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
                <select value={selectedFilter} onChange={handleFilterChange}>
                    <option value="all">All</option>
                    <option value="4">Rating 4★ and above</option>
                    <option value="3">Rating 3★ and above</option>
                    <option value="fastDelivery">Quick Delivery</option>
                </select>

                <input
                    type="text"
                    placeholder="Search for a Restaurant"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </div>

            <div id="res-container">
                {restaurants.map((data) => (
                    <Link
                        to={"/restaurants/" + data.info.id}
                        key={data.info.id}
                    >
                        <RestaurantCard restaurants={data} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
