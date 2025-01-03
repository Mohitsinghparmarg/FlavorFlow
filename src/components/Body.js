import { useEffect, useState, useCallback, useContext } from "react";
import { RestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RES_LIST } from "../utills/constant";
import { useOnlineStatus } from "../utills/useOnlineStatus";
import { OfflineGame } from "./OfflineGame";
import { UserContext } from "../utills/UserContext";

const Body = () => {
  const [ListOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const onlineStatus = useOnlineStatus();

  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(RES_LIST);
      if (!response.ok) throw new Error("Network response was not ok");
      const json = await response.json();
      const restaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setListOfRestaurant(restaurants);
      setFilteredRestaurant(restaurants);
    } catch (error) {
      setError("Failed to load restaurants. Please try again.");
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
    setSearchText(""); // Reset search text
    const topRated = ListOfRestaurant.filter((res) => res.info.avgRating >= 4.5);
    setFilteredRestaurant(topRated);
  }, [ListOfRestaurant]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleSearch();
    }, 300); // Debounce for search

    return () => clearTimeout(timeoutId);
  }, [searchText, handleSearch]);

  if (!onlineStatus) {
    return <OfflineGame />;
  }

  if (loading) {
    return <Shimmer />;
  }

  if (error) {
    return (
      <div className="text-center">
        <p className="text-red-500 font-semibold">{error}</p>
        <button
          onClick={fetchData}
          className="mt-4 px-6 py-2 text-white bg-blue-500 rounded shadow hover:bg-blue-600 transition"
        >
          Retry
        </button>
      </div>
    );
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
        {setUserName && (
          <div className="m-4 p-4 flex items-center">
            <label className="mr-2">UserName:</label>
            <input
              className="border border-black p-2"
              placeholder="Enter username"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRestaurant.length === 0 ? (
          <p className="text-gray-500 text-center" aria-live="polite">
            No restaurants found
          </p>
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
