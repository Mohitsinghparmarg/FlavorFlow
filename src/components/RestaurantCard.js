import { useContext } from "react";
import { CDN_URL } from "../utills/constant";
import { UserContext } from "../utills/UserContext";

export const RestaurantCard = ({ restaurants }) => {
  const {
    name,
    cloudinaryImageId,
    avgRating,
    cuisines,
    costForTwo,
    sla: { deliveryTime } = {},
  } = restaurants?.info || {};

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="res-card w-full max-w-[260px] p-5 rounded-lg bg-[#f7f7f7] shadow-lg flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-xl mx-auto">
      <img
        className="res-logo w-full h-[140px] object-cover rounded-md"
        src={`${CDN_URL}${cloudinaryImageId}`}
        alt={name}
      />
      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold text-[#f26522]">{name}</h3>
        <p className="text-sm text-gray-700 mt-1">{cuisines?.join(", ")}</p>
        <div className="flex items-center mt-2">
          <i className="fas fa-star text-[rgb(201,102,49)] mr-1"></i>
          <span className="text-lg font-medium text-gray-700">{avgRating} Rating</span>
        </div>
        <p className="text-md text-gray-600 mt-1">{costForTwo}</p>
        <p className="text-md text-gray-600 mt-1">{deliveryTime} minutes</p>
        <p>User:{loggedInUser}</p>
      </div>
    </div>
  );
};

// Container for restaurant cards
export const RestaurantContainer = ({ children }) => (
  <div className="res-container flex flex-wrap gap-12 justify-center">
    {children}
  </div>
);

// No results component
export const NoResults = () => (
  <div className="no-results text-center text-gray-400 text-2xl mt-12">
    No results found
  </div>
);
