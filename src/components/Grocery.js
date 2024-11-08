import { useOnlineStatus } from "../utills/useOnlineStatus";
import { OfflineGame } from "./OfflineGame";

const Grocery = () => {
  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <OfflineGame />;
  }

  const groceryItems = [
    { name: "Organic Chicken Breast", price: "₹599.00", description: "Juicy chicken breast for grilling or roasting." },
    { name: "Fresh Basil", price: "₹120.00", description: "Aromatic basil for enhancing flavors in dishes." },
    { name: "Roma Tomatoes", price: "₹150.00", description: "Perfect for sauces and salads." },
    { name: "Garlic", price: "₹80.00", description: "Fresh garlic to add depth to your recipes." },
    { name: "Mozzarella Cheese", price: "₹200.00", description: "Creamy cheese ideal for pizzas and salads." },
    { name: "Pasta", price: "₹150.00", description: "Versatile pasta for various culinary creations." },
    { name: "Fresh Spinach", price: "₹70.00", description: "Nutritious spinach for salads and sautéed dishes." },
    { name: "Extra Virgin Olive Oil", price: "₹350.00", description: "Premium oil for dressings and cooking." },
    { name: "Eggs", price: "₹120.00", description: "Farm-fresh eggs, essential for breakfast and baking." },
    { name: "Sea Salt", price: "₹60.00", description: "Enhances flavor and seasoning for your dishes." },
  ];

  return (
    <div className="bg-gradient-to-br from-green-300 to-green-500 p-6 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 shadow-md">Restaurant Ingredient Store</h1>
      <p className="text-lg md:text-xl text-white mb-8 text-center">Explore our selection of high-quality ingredients for your culinary needs!</p>

      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl">
        <h2 className="text-3xl font-semibold mb-4">Featured Ingredients</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {groceryItems.map((item, index) => (
            <li key={index} className="flex flex-col justify-between items-start p-4 border-b sm:border-none bg-gray-50 rounded-lg shadow hover:shadow-md transition-shadow duration-200">
              <div>
                <h3 className="text-lg md:text-xl font-medium">{item.name}</h3>
                <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
              </div>
              <span className="text-lg font-bold text-green-600 mt-2">{item.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Grocery;
