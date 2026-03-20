import { useEffect, useState } from "react";
import type { Food } from "../types/Food";
import { apiFetch } from "../api/api";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { addToCart, cart, totalPrice } = useCart();
  const [foods, setFoods] = useState<Food[]>([]);
  const categories = [
    { name: "All", icon: "🍽️" },
    { name: "Burger", icon: "🍔" },
    { name: "Pizza", icon: "🍕" },
    { name: "Sushi", icon: "🍣" },
    { name: "Dessert", icon: "🍰" },
    { name: "Drinks", icon: "🥤" },
    { name: "Sweet", icon: "🍰" },
    { name: "INDIAN", icon: "🥤" },
  ];
  const [activeCategory, setActiveCategory] = useState("All");
  useEffect(() => {
    const fetchFood = async () => {
      const data = await apiFetch("/foods");
      setFoods(data);
    };
    fetchFood();
  }, []);

  const filteredFoods =
    activeCategory === "All"
      ? foods
      : foods.filter((food) => food.category === activeCategory);

  return (
    <>
   <div className="flex h-screen bg-[#0f0f0f] text-white">
  
  {/* Sidebar */}
  <div className="w-64 bg-[#1a1a1a] p-5 shadow-lg">
    
    <h1 className="text-2xl font-bold text-orange-500 mb-8">
      quickBite
    </h1>

    <div className="flex flex-col gap-5 text-gray-300">

      <Link to="/" className="hover:text-orange-500">
        Home
      </Link>

      <Link to="/" className="hover:text-orange-500">
        Explore
      </Link>

      <Link to="/orders" className="hover:text-orange-500">
        My Orders
      </Link>

      <Link to="/cart" className="hover:text-orange-500">
        Cart
      </Link>

      <Link to="/profile" className="hover:text-orange-500">
        Profile
      </Link>

    </div>

  </div>
        {/* Main content */}
        <div className="flex-1 p-6 overflow-y-auto ">
          <h1 className="text-3xl font-bold mb-6">Welcome to quickBite 👋</h1>
          {/* search box */}
          <input
            type="text"
            placeholder="Search food..."
            className="w-full p-3 rounded-full border mb-6 bg-[#1a1a1a] border-orange-500 outline-none shadow-[0_0_10px_rgba(255,115,0,0.5)] "
          />

          {/* Category selector */}
          <div className="flex gap-4 overflow-x-auto mb-8">
            {categories.map((cat) => (
              <div
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className="flex flex-col items-center cursor-pointer"
              >
                {/* Circle */}
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-full text-2xl transition hover:scale-110
        ${
          activeCategory === cat.name
            ? "bg-orange-500 text-white shadow-[0_0_15px_rgba(255,115,0,0.7)]"
            : "bg-[#1a1a1a] text-gray-300"
        }`}
                >
                  {cat.icon}
                </div>

                {/* Label */}
                <p
                  className={`mt-2 text-sm ${
                    activeCategory === cat.name
                      ? "text-orange-500"
                      : "text-gray-400"
                  }`}
                >
                  {cat.name}
                </p>
              </div>
            ))}
          </div>

          {/* foodGrid */}
          <div className="grid grid-cols-4 gap-6">
            {filteredFoods.map((food) => (
              <div
                key={food._id}
                className="bg-[#1a1a1a] p-4 rounded-lg shadow-md 
                           hover:shadow-orange-500/40 
                            hover:scale-105 
                            transition duration-300 ease-in-out cursor-pointer"
              >
                <img
                  src={food.image}
                  className="w-full h-40 object-cover rounded"
                />
                <h3 className="mt-3 font-semibold text-lg">{food.name}</h3>
                <p className="text-gray-600 text-sm">₹{food.price}</p>
                <p className="text-gray-600 text-sm">{food.category}</p>
                <button
                  onClick={() => addToCart(food)}
                  className="mt-3 w-full bg-orange-500 text-white py-2 rounded 
                            hover:bg-orange-600 active:scale-95 transition"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Cart */}
        <div className="w-72 bg-[#1a1a1a] p-5 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Your Feast 🍔</h2>

          {cart.length === 0 ? (
            <p className="text-gray-500">Cart is empty...</p>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.food._id}
                  className="flex justify-between items-center"
                >
                  <div>
                    <p className="font-medium">{item.food.name}</p>
                    <p className="text-sm text-gray-500">x{item.quantity}</p>
                  </div>
                  <p className="text-sm">₹{item.food.price * item.quantity}</p>
                </div>
              ))}
            </div>
          )}
          {/* total */}
          <div className="mt-6 border-t pt-4">
            <p className="font-semibold">Total : ₹{totalPrice} </p>
          </div>

          <button className="mt-6 w-full bg-orange-500 text-white py-2 rounded">
            View Cart
          </button>
        </div>
      </div>
    </>
  );
};
export default Home;
