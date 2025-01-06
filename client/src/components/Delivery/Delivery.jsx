// import React, { useState } from "react";

// // components
// import Navbar from "../Navbar/Navbar"; // Import Navbar
// import DeliveryCarousel from "./DeliveryCarousel";
// import RestaurantCard from "../RestaurantCard";

// const Delivery = () => {
//     const [restaurantList, setRestaurantList] = useState([
//         {
//             _id: "124ksjf435245jv34fg3",
//             isPro: true,
//             isOff: true,
//             name: "Nathu's Sweets",
//             restaurantReviewValue: "3.7",
//             cuisine: [
//                 "Mithai",
//                 "South Indian",
//                 "Chinese",
//                 "Street Food",
//                 "Fast Food",
//                 "Desserts",
//                 "North Indian",
//             ],
//             averageCost: "450",
//         },
//         {
//             _id: "sdffdsadadsfadfadsfadsf",
//             isPro: true,
//             isOff: false,
//             name: "Master Koii's",
//             restaurantReviewValue: "4.6",
//             cuisine: ["Asian", "Chinese", "Thai", "Malaysian", "Korean"],
//             averageCost: "600",
//         },
//         {
//             _id: "124ksjf435245jfdfv34fg3",
//             isPro: true,
//             isOff: true,
//             name: "Nathu's Sweets",
//             restaurantReviewValue: "3.7",
//             cuisine: [
//                 "Mithai",
//                 "South Indian",
//                 "Chinese",
//                 "Street Food",
//                 "Fast Food",
//                 "Desserts",
//                 "North Indian",
//             ],
//             averageCost: "450",
//         },
//     ]);

//     return (
//         <>
//         <Navbar /> {/* Include Navbar */}
//         <DeliveryCarousel />
//         <h1 className="text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold">Delivery Restaurants in NCR (Delhi)</h1>
//         <div className="grid gap-0 md:gap-2 md:grid-cols-2 grid-cols-1 lg:grid-cols-3">
//             {restaurantList.map((restaurant) => (
//                 <RestaurantCard {...restaurant} key={restaurant._id} />
//             ))}
//         </div>
//         <div className="grid gap-0 md:gap-2 md:grid-cols-2 grid-cols-1 lg:grid-cols-3">
//             {restaurantList.map((restaurant) => (
//                 <RestaurantCard {...restaurant} key={restaurant._id} />
//             ))}
//         </div>
//         </>
//     );
// };

// export default Delivery;
















// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import RestaurantCard from "../RestaurantCard";

// const Delivery = () => {
//   const [restaurants, setRestaurants] = useState([]);

//   useEffect(() => {
//     const fetchRestaurants = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/restaurantsData/getRestaurant");
//         // console.log("API Response:", response.data); // Debug API data structure
//         setRestaurants(response.data);
//       } catch (error) {
//         console.error("Error fetching restaurants:", error);
//       }
//     };

//     fetchRestaurants();
//   }, []);

//   return (
//     <div className="flex flex-wrap gap-4">
//       {restaurants.length > 0 ? (
//         restaurants.map((restaurant) => (
//           <RestaurantCard key={restaurant.restaurantName || Math.random()} restaurant={restaurant} />
//         ))
//       ) : (
//         <p>Loading restaurants...</p>
//       )}
//     </div>
//   );
// };

// export default Delivery;















import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import DeliveryCarousel from "./DeliveryCarousel";
import RestaurantCard from "../RestaurantCard";

const Delivery = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/restaurantsData/getRestaurant"
        );
        setRestaurants(response.data);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <>
      <Navbar />
      <DeliveryCarousel />
      <h1 className="text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold">
      Food Delivery Restaurants
      </h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {restaurants.length > 0 ? (
          restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant._id} restaurant={restaurant} />
          ))
        ) : (
          <p>Loading restaurants...</p>
        )}
      </div>
    </>
  );
};

export default Delivery;
