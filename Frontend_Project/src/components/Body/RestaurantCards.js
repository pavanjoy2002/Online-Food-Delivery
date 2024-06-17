import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RestaurantCardShimmer } from "../ShimmerEffect/ShimmerEffect";

const RestaurantCards = () => {

  const [listOfRestaurantCards, setListOfRestaurantCards] = useState([]);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadRestaurantData();
  }, []);

  const loadRestaurantData = async () => {
    try {
      const foodsResult = await fetch("http://localhost:8080/viewallfoods");
      const foodsJson = await foodsResult.json();
      setListOfRestaurantCards(foodsJson);
    } catch (error) {
      console.error("Error loading foods:", error);
    }

    try {
      const restaurantsResult = await fetch("http://localhost:8080/allrestaurants");
      const restaurantsJson = await restaurantsResult.json();
      setListOfRestaurants(restaurantsJson);
    } catch (error) {
      console.error("Error loading restaurants:", error);
    } finally {
      setLoading(false); // Set loading to false once data fetching is complete
    }
  };

  const getRestaurantNameById = (restaurantId) => {
    const restaurant = listOfRestaurants.find((r) => r.restaurantId === restaurantId);
    return restaurant ? restaurant.restaurantName : "Unknown Restaurant";
  };

  return loading ? (
    <p><RestaurantCardShimmer /></p>
  ) : (
    <>
      <div className="cards my-5 mx-5">
      {listOfRestaurantCards.map((restaurantCard)=>
        <div className="card shadow mx-2" style={{ width: "20rem " }} key={restaurantCard.foodId}>
          <Link to={`/deliveryperson/food-details/${restaurantCard.foodId}`} className="card-link">
          <img
            src={restaurantCard.foodImgUrl}
            className="card-img-top"
            alt="..."
          />
          </Link>

          <div className="card-body">
            <h5 className="card-title">{restaurantCard.name}</h5>
            <p className="card-text">{getRestaurantNameById(restaurantCard.restaurantId)}</p>
            <p className="card-text">{restaurantCard.categoryName}</p>
            <p className="card-text">Rating : <span class="bg-success text-light px-2 border rounded">4.0 ☆</span></p>
            <p className="card-text">{restaurantCard.price}</p>
            <p className="card-text">Delivery Time : 25-35 Min</p>
            <Link to={`/food-details/${restaurantCard.foodId}`} className="btn btn-primary m-2">
                View Details
            </Link>
            <Link to="" className="btn btn-primary m-2">
                Add To Cart
            </Link>
          </div>
        </div>
        )}
      </div>
    </>
  );
};

export default RestaurantCards;

