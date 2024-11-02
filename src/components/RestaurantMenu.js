import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../utills/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, areaName, costForTwoMessage, avgRating, sla } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards || [];

  return (
    <div className="bg-gradient-to-br from-[#ff6a3d] to-[#fcb045] p-10 rounded-2xl max-w-3xl mx-auto my-12 shadow-lg text-center text-white transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
      <ul className="list-none p-0 m-0">
        <h2 className="text-5xl mb-5 font-extrabold uppercase tracking-wider text-[#ffddc1] shadow-lg hover:text-[#ff7043] hover:shadow-md">
          {name}
        </h2>
        <h2 className="text-2xl my-2 font-medium opacity-90">{cuisines?.join(", ")}</h2>
        <h2 className="text-xl my-2">{areaName}</h2>
        <h2 className="text-xl my-2 text-[#ffca28]">{avgRating}- Rating</h2>
        <h2 className="text-xl my-2">{costForTwoMessage}</h2>
        <h2 className="text-xl my-2">{sla?.slaString}</h2>

        <h3 className="text-2xl my-5">Menu Items</h3>
      </ul>
      {itemCards.length > 0 ? (
        itemCards.map((item) => (
          <ul key={item?.card?.info?.id}>
            {item?.card?.info?.name} - {"Rs"} {item?.card?.info?.price / 100}
          </ul>
        ))
      ) : (
        <li>No items available</li>
      )}
    </div>
  );
};

export default RestaurantMenu;
