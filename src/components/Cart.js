const Cart = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#ff4b2b] to-[#fc8019] p-5 text-center">
            <h1 className="text-4xl text-white font-bold m-0 text-shadow-lg bg-[#fc8019] py-5 px-10 rounded-2xl shadow-lg inline-block mt-5 transition-transform duration-300 ease-in-out hover:translate-y-[-5px] hover:shadow-2xl">
                Cart Landing Page
            </h1>
            <button className="bg-white text-[#fc8019] border-2 border-[#fc8019] py-3 px-6 text-xl rounded-lg cursor-pointer mt-8 transition-colors duration-300 ease-in-out hover:bg-[#fc8019] hover:text-white">
                Checkout
            </button>
        </div>
    );
};

export default Cart;
