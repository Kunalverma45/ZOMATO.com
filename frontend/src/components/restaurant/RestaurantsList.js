import React, { useEffect, useState } from "react";
import { fetchRestaurants } from "../../api";

const RestaurantsList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const getRestaurants = async () => {
      try {
        const { data } = await fetchRestaurants(); // API call
        setRestaurants(data); // Store data in state
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };

    getRestaurants();
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant._id}>
            {restaurant.name} - {restaurant.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantsList;
