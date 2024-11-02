import { useOnlineStatus } from "../utills/useOnlineStatus";
import { OfflineGame } from "./OfflineGame";

const Grocery = () => {
  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <OfflineGame />;
  }

  const groceryItems = [
    { name: "Organic Chicken Breast", price: "$5.99", description: "Juicy chicken breast for grilling or roasting." },
    { name: "Fresh Basil", price: "$2.00", description: "Aromatic basil for enhancing flavors in dishes." },
    { name: "Roma Tomatoes", price: "$2.50", description: "Perfect for sauces and salads." },
    { name: "Garlic", price: "$1.50", description: "Fresh garlic to add depth to your recipes." },
    { name: "Mozzarella Cheese", price: "$4.00", description: "Creamy cheese ideal for pizzas and salads." },
    { name: "Pasta", price: "$2.99", description: "Versatile pasta for various culinary creations." },
    { name: "Fresh Spinach", price: "$1.80", description: "Nutritious spinach for salads and sautéed dishes." },
    { name: "Extra Virgin Olive Oil", price: "$3.50", description: "Premium oil for dressings and cooking." },
    { name: "Eggs", price: "$2.50", description: "Farm-fresh eggs, essential for breakfast and baking." },
    { name: "Sea Salt", price: "$1.20", description: "Enhances flavor and seasoning for your dishes." },
  ];

  return (
    <div className="bg-gradient-to-br from-green-300 to-green-500 p-6 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold text-white mb-5 shadow-md">Restaurant Ingredient Store</h1>
      <p className="text-lg text-white mb-8">Explore our selection of high-quality ingredients for your culinary needs!</p>

      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4">Featured Ingredients</h2>
        <ul className="space-y-4">
          {groceryItems.map((item, index) => (
            <li key={index} className="flex justify-between items-center p-4 border-b">
              <div>
                <h3 className="text-xl font-medium">{item.name}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
              <span className="text-lg font-bold text-green-600">{item.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Grocery;
