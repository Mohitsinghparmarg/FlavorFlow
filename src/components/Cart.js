import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utills/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div
      className="cart-container text-center m-4 p-4 min-h-screen flex flex-col items-center justify-center"
      style={{
        background: "linear-gradient(to bottom, #e8faff, #f7f6ff)",
      }}
    >
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Cart</h1>

      <div className="cart-content w-4/12 bg-white shadow-md rounded-lg p-6">
      
        <button
          className="clear-cart-btn w-full p-2 mb-4 bg-blue-100 border border-blue-300 rounded-lg hover:bg-blue-200 transition text-blue-800 font-semibold"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>

      
        {cartItems.length === 0 ? (
          <h2 className="empty-cart-message text-lg mt-4 text-gray-600">
            Your cart is empty. Please add items to your cart.
          </h2>
        ) : (
          <ItemList items={cartItems} />
        )}
      </div>
    </div>
  );
};

export default Cart;
