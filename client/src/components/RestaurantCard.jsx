// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { AiTwotoneStar } from "react-icons/ai";

// const RestaurantCard = (props) => {
//     const [image, setImage] = useState({
//         images: [
//             {
//                 location:
//                     "https://b.zmtcdn.com/data/pictures/chains/4/584/bdab27a41125cd45ddf814c7fad470b2_o2_featured_v2.jpg",
//             },
//         ],
//     });

//     return (
//         <Link
//             to={`/restaurant/${props._id}/overview`}
//         // className="w-full md:w-1/2 lg:w-1/3"
//         >
//             <div className="bg-white p-4 w-full rounded-2xl transition duration-700 ease-in-out  sm:shadow-md md:shadow-none hover:drop-shadow-lg">
//                 <div className="w-full relative">
//                     <div className="w-full bottom-4 flex items-end justify-between">
//                         <div className="flex flex-col gap-2 items-start absolute">
//                             {props.isPro && (
//                                 <span className="bg-zomato-400 text-white px-2 py-1 rounded text-sm">
//                                     Pro extra 10% off
//                                 </span>
//                             )}
//                             {props.isOff && (
//                                 <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">
//                                     $250 OFF
//                                 </span>
//                             )}
//                         </div>
//                         <img
//                             src={image.images.length && image.images[0].location}
//                             alt="food"
//                             className="w-full h-full rounded-2xl"
//                         />
//                     </div>
//                     <div className="my-2 flex flex-col gap-2">
//                         <div className="flex items-center justify-between">
//                             <h4 className="text-xl font-medium">{props.name}</h4>
//                             <span className="bg-green-800 text-white text-sm p-1 gap-3 rounded flex items-center">
//                                 {props.restaurantReviewValue} <AiTwotoneStar />
//                             </span>
//                         </div>
//                         <div className="flex items-center justify-between text-gray-500 gap-10">
//                             <p className="truncate text-ellipsis overflow-hidden w-3/4">
//                                 {props.cuisine.join(", ")}
//                             </p>
//                             <p className="w-3/4 text-right">₹ {props.averageCost} for one</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </Link>
//     );
// };

// export default RestaurantCard;



















// import React from "react";

// const RestaurantCard = ({ restaurant }) => {
//   return (
//     <div className="bg-white p-4 rounded-lg shadow-md w-64">
//       {/* Display Restaurant Details */}
//       <h3 className="text-xl font-semibold">
//         {restaurant.restaurantName || "No Name Available"}
//       </h3>

//       {/* Display Cuisine List */}
//       <p>
//         {restaurant.cuisines && restaurant.cuisines.length > 0
//           ? restaurant.cuisines.join(", ")
//           : "No Cuisine Available"}
//       </p>

//       {/* Handle Missing Fields */}
//       <p>Average Cost: ₹{restaurant.averageCost || "N/A"} for one</p>
//       <p>Shop Number: {restaurant.shopNumber || "Not Provided"}</p>
//       <p>Address: {restaurant.location || "Address Not Available"}</p>

//       {/* Display Profile Image */}
//       {restaurant.profileImage ? (
//         <img
//         //   src={restaurant.profileImage}
//           alt={`${restaurant.restaurantName} Profile`}
//           className="mt-2 rounded-lg w-full"
//         />
//       ) : (
//         <p>Image Not Available</p>
//       )}
//     </div>
//   );
// };

// export default RestaurantCard;













import React from "react";
import { Link } from "react-router-dom";
import { AiTwotoneStar } from "react-icons/ai";

const RestaurantCard = ({ restaurant }) => {
  return (
    <Link to={`/restaurant/${restaurant._id}/overview`}>
      <div className="bg-white p-4 rounded-lg shadow-md w-full transition duration-300 hover:shadow-lg">
        <div className="relative">
          {/* Pro and Discount Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {restaurant.isPro && (
              <span className="bg-zomato-400 text-white px-2 py-1 rounded text-sm">
                Pro extra 10% off
              </span>
            )}
            {restaurant.isOff && (
              <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">
                ₹250 OFF
              </span>
            )}
          </div>

          {/* Restaurant Image */}
          {restaurant.profileImage ? (
            <img
              src={restaurant.profileImage}
              alt={`${restaurant.restaurantName}`}
            //   alt={`${restaurant.restaurantName}`}
              className="w-full h-48 object-cover rounded-lg"
            />
          ) : (
            <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-lg">
              <p>Image Not Available</p>
            </div>
          )}
        </div>

        {/* Restaurant Info */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold">{restaurant.restaurantName}</h3>
          <div className="flex items-center justify-between mt-2">
            <span className="flex items-center gap-1 bg-green-800 text-white text-sm px-2 py-1 rounded">
              {restaurant.restaurantReviewValue || "N/A"} <AiTwotoneStar />
            </span>
            <p className="text-gray-500">₹{restaurant.averageCost} for one</p>
          </div>
          <p className="text-gray-500 mt-2">
            {restaurant.cuisines?.join(", ") || "No Cuisine Available"}
          </p>
          <p className="text-gray-400 mt-1 text-sm">
            {restaurant.location || "Address Not Available"}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;









