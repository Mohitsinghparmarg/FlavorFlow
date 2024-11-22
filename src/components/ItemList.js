import { useDispatch } from "react-redux";
import { CDN_URL } from "../utills/constant";
import { addItem } from "../utills/cartSlice";

const ItemList = ({ items }) => {



   const dispatch = useDispatch();
  const handleAddItem = (item) => {
       dispatch(addItem(item));
  }
  
  return (
    <div>
      {items.map((item) => {
        const { id, name, price, defaultPrice, description, imageId } = item.card.info;
        const itemPrice = price ? price / 100 : defaultPrice / 100;

        return (
          <div key={id} className="p-2 m-2 border-b-2 border-gray-200 flex justify-between text-left">
            <div className="w-9/12">
              <div className="py-2">
                <span>{name}</span>
                <span> - ₹ {itemPrice}</span>
              </div>
              {description && <p className="text-xs">{description}</p>}
            </div>
            <div className="w-3/12 p-4 relative">
              <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg absolute top-0"
              onClick={() => handleAddItem(item)}>
                Add +
              </button>
              {imageId && <img src={`${CDN_URL}${imageId}`} className="w-full" alt={name} />}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
