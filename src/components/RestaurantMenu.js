import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../utills/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null); // Initialize with null for no category expanded

  if (!resInfo) return <Shimmer />;

  const restaurantDetails = resInfo?.cards[2]?.card?.card?.info || {};
  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  ) || [];

  const { name, cuisines = [], costForTwoMessage } = restaurantDetails;

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h2 className="font-bold text-lg">{cuisines.join(", ")}</h2>
      <h3 className="font-bold text-lg">{costForTwoMessage}</h3>

      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category.card.card}
          showItems={index === showIndex}
          setShowIndex={() => setShowIndex(index === showIndex ? null : index)} // Toggle the category
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
