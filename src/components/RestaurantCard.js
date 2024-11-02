import { CDN_URL } from "../utills/constant";

export const RestaurantCard = (props) => {
    const { restaurants } = props;

    const {
        name,
        cloudinaryImageId,
        avgRating,
        cuisines,
        costForTwo,
        sla
    } = restaurants?.info;

    return (
        <div className="res-card w-full max-w-[260px] h-auto p-5 rounded-[15px] bg-[#f7f7f7] shadow-lg flex flex-col items-center justify-start overflow-hidden transition-transform duration-300 hover:scale-102 hover:shadow-xl mx-auto">
            <img 
                className="res-logo w-full h-[140px] object-cover rounded-[10px]" 
                src={CDN_URL + cloudinaryImageId} 
                alt={name} 
            />
            <div className="p-4 flex flex-col items-center">
                <h3 className="text-xl font-semibold text-[#f26522]">{name}</h3>
                <p className="text-sm text-gray-700 mt-1">{cuisines?.join(", ")}</p>
                <div className="flex items-center mt-2">
                    <i className="fas fa-star text-[rgb(201,102,49)] mr-1"></i>
                    <span className="text-lg font-medium text-gray-700">{avgRating} Rating</span>
                </div>
                <p className="text-md text-gray-600 mt-1">{costForTwo}</p>
                <p className="text-md text-gray-600 mt-1">{sla.deliveryTime} minutes</p>
            </div>
        </div>
    );
};

// Container for restaurant cards
export const RestaurantContainer = ({ children }) => {
    return (
        <div className="res-container flex flex-wrap gap-[60px] justify-center">
            {children}
        </div>
    );
};

// No results component
export const NoResults = () => {
    return (
        <div className="no-results text-center text-gray-400 text-2xl mt-[50px]">
            No results found
        </div>
    );
};
