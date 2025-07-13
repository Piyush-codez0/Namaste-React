import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => (
    <div className="navbar">
        <div id="logo">
            <img src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/food-express-by-oscar-skippa-designcrowd.jpg" alt="Food Express Logo" />
        </div>
        <div id="menus">
            <h3>Home</h3>
            <h3>About</h3>
            <h3>Profile</h3>
            <h3>Contact us</h3>
        </div>
    </div>
)

const RestaurantCard = (props) => {
    const { name, cuisines, rating } = props;
    
    return (
        <div id="cards">
            <img src="https://images.pexels.com/photos/1860208/pexels-photo-1860208.jpeg?cs=srgb&dl=cooked-food-1860208.jpg&fm=jpg" alt="" />
            <h4>{name}</h4>
            <p>{cuisines}</p>
            <p>Rating: {rating}</p>
            <br />
            <p>FREE DELIVERY</p>
        </div>
    )
}

const Body = () => (
    <div id="main">
        <div id="searchbutton">
            <input type="text" />
            <button>Search</button>
        </div>
        <div id="res-container">
            <RestaurantCard 
                name="Rawat's Food & Restro"
                cuisines = "Pure veg, Pahadi food, Fresh"  
                rating = "4.8"  
            />

            <RestaurantCard 
                name="Rawat's Food & Restro"
                cuisines = "Pure veg, Pahadi food, Fresh"  
                rating = "4.8"  
            />

            <RestaurantCard 
                name="Rawat's Food & Restro"
                cuisines = "Pure veg, Pahadi food, Fresh"  
                rating = "4.8"  
            />

            <RestaurantCard 
                name="Rawat's Food & Restro"
                cuisines = "Pure veg, Pahadi food, Fresh"  
                rating = "4.8"  
            />

            <RestaurantCard 
                name="Rawat's Food & Restro"
                cuisines = "Pure veg, Pahadi food, Fresh"  
                rating = "4.8"  
            />

            <RestaurantCard 
                name="Rawat's Food & Restro"
                cuisines = "Pure veg, Pahadi food, Fresh"  
                rating = "4.8"  
            />

            <RestaurantCard 
                name="Rawat's Food & Restro"
                cuisines = "Pure veg, Pahadi food, Fresh"  
                rating = "4.8"  
            />

        </div>
    </div>
)

const App = () => (
    <div>
        <Header />
        <Body />
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);