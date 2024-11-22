import { useContext, useState } from "react";
import { LOGO_URL } from "../utills/constant";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utills/useOnlineStatus";
import { UserContext } from "../utills/UserContext";
import { useSelector } from "react-redux";


const Header = () => {
  const [BtnName, setBtnName] = useState("Login");

  const onlineStats = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext)
  
  const cartItems = useSelector((store) => (store.cart.items));
  console.log(cartItems)
 

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between p-3 bg-gradient-to-r from-[#fc8019] to-[#ffb53f] shadow-md border-b-2 border-opacity-30 border-white rounded-b-[20px] transition-all duration-300 hover:shadow-lg hover:bg-gradient-to-r hover:from-[#e56d1e] hover:to-[#ffb53f]">
      <div className="logoContainer flex-shrink-0">
        <img
          className="w-24 sm:w-32 h-auto transition-transform duration-300 hover:scale-110 hover:brightness-125"
          src={LOGO_URL}
          alt="Logo"
        />
      </div>
      <div className="nav-items flex-1 flex justify-end">
        <ul className="hidden sm:flex items-center gap-4 list-none m-0 p-0">
          <li className="text-white font-semibold text-base">
            Online Status: {onlineStats ? "✅" : "🔴"}
          </li>
          <li className="text-white font-semibold hover:text-opacity-80 transition-all duration-300 transform hover:translate-y-[-2px]">
            <Link to="/Home">Home</Link>
          </li>
          <li className="text-white font-semibold hover:text-opacity-80 transition-all duration-300 transform hover:translate-y-[-2px]">
            <Link to="/About">About</Link>
          </li>
          <li className="text-white font-semibold hover:text-opacity-80 transition-all duration-300 transform hover:translate-y-[-2px]">
            <Link to="/Contact">Contact</Link>
          </li>
          <li className="text-white font-semibold hover:text-opacity-80 transition-all duration-300 transform hover:translate-y-[-2px]">
            <Link to="/Cart">Cart-({cartItems.length}-Items)</Link>
          </li>
          <li className="text-white font-semibold hover:text-opacity-80 transition-all duration-300 transform hover:translate-y-[-2px]">
            <Link to="/Grocery">Grocery</Link>
          </li>
          <li className="text-white font-semibold hover:text-opacity-80 transition-all duration-300 transform hover:translate-y-[-2px]">{loggedInUser}</li>
        </ul>
        <button
          className="relative ml-4 px-4 py-2 text-sm font-semibold uppercase text-white bg-gradient-to-r from-[#ff5f6d] to-[#ffc371] rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:bg-gradient-to-r hover:from-[#ff9068] hover:to-[#fdc830] focus:outline-none active:bg-gradient-to-r active:from-[#ff5f6d] active:to-[#ffc371]"
          onClick={() => setBtnName(BtnName === "Login" ? "LogOut" : "Login")}
        >
          <span className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full before:content-[''] before:absolute before:bg-white before:opacity-30 before:rounded-full before:scale-0 before:transition-transform duration-500 hover:before:scale-100"></span>
          {BtnName}
        </button>
      </div>
      <div className="flex sm:hidden items-center">
        <button
          className="text-white font-semibold text-base"
          onClick={() => setBtnName(BtnName === "Login" ? "LogOut" : "Login")}
        >
          {BtnName}
        </button>
      </div>

    </div>
  );
};

export default Header;
