import { useEffect, useState, useCallback } from "react";
import { RestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RES_LIST } from "../utills/constant";
import { useOnlineStatus } from "../utills/useOnlineStatus";
import { OfflineGame } from "./OfflineGame";

const Body = () => {
  const [ListOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(RES_LIST);
      const json = await data.json();
      const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setListOfRestaurant(restaurants);
      setFilteredRestaurant(restaurants);
    } catch (error) {
      setError("Failed to load restaurants.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = useCallback(() => {
    const filtered = ListOfRestaurant.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filtered);
  }, [ListOfRestaurant, searchText]);

  const filterTopRated = useCallback(() => {
    const topRated = ListOfRestaurant.filter((res) => res.info.avgRating >= 4.5);
    setFilteredRestaurant(topRated);
  }, [ListOfRestaurant]);

  if (!onlineStatus) {
    return <OfflineGame />;
  }

  if (loading) {
    return <Shimmer />;
  }

  if (error) {
    return <p className="text-red-500 font-semibold">{error}</p>;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 p-6 bg-gray-100 rounded-xl shadow-md">
        <div className="flex items-center gap-4">
          <input
            type="text"
            className="w-72 p-3 text-lg border border-gray-300 rounded-full focus:border-pink-500 focus:ring focus:ring-pink-300 transition duration-300 ease-in-out"
            placeholder="Search Restaurants"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            aria-label="Search Restaurants"
          />
          <button
            onClick={handleSearch}
            className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-orange-400 rounded-full shadow-lg hover:from-pink-600 hover:to-orange-500 transition duration-300 ease-in-out focus:outline-none"
            aria-label="Search"
          >
            Search
          </button>
        </div>
        <button
          className="px-6 py-3 mt-4 md:mt-0 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-lg hover:from-purple-600 hover:to-blue-600 transition duration-300 ease-in-out focus:outline-none"
          onClick={filterTopRated}
          aria-label="Top Rated Restaurants"
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRestaurant.length === 0 ? (
          <p className="text-gray-500 text-center">No restaurants found</p>
        ) : (
          filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant?.info?.id}
              to={`/ResMenu/${restaurant?.info?.id}`}
              className="block hover:shadow-lg transition-shadow duration-300 rounded-md overflow-hidden"
            >
              <RestaurantCard restaurants={restaurant} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
