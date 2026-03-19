import { useEffect, useState } from "react";
import type { Food } from "../types/Food";
import { apiFetch } from "../api/api";
import { useCart } from "../context/CartContext";

const Home = () => {
  const { addToCart,cart,totalPrice } = useCart();
  const [foods, setFoods] = useState<Food[]>([]);
  const categories = [
    "All",
    "Burger",
    "Pizza",
    "Sushi",
    "Dessert",
    "Drinks",
    "Sweet",
    "INDIAN",
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
        {/* Slidebar */}
        <div className="w-64 bg-[#1a1a1a] p-5 shadow-lg">
          <h1 className="text-2xl font-bold text-orange-500 mb-8">quickBite</h1>
          <ul className="space-y-5 text-gray-300">
            <li className="text-orange-500 font-semibold">Home</li>
            <li className="hover:text-orange-500 cursor-pointer">Explore</li>
            <li className="hover:text-orange-500 cursor-pointer">My Orders</li>
            <li className="hover:text-orange-500 cursor-pointer">Cart</li>
            <li className="hover:text-orange-500 cursor-pointer">Profile</li>
          </ul>
        </div>

        {/* Main content */}
        <div className="flex-1 p-6 overflow-y-auto ">
          <h1 className="text-3xl font-bold mb-6">Welcome to quickBite 👋</h1>
          {/* search box */}
          <input
            type="text"
            placeholder="Search food..."
            className="w-full p-3 rounded-full border mb-6 bg-[#1a1a1a] border-orange-500 outline-none shadow-[0_0_10px_rgba(255,115,0,0.5)]"
          />

          {/* Category selector */}
          <div className="flex gap-4 overflow-x-auto mb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-orange-500 text-white"
                    : "bg-white shadow"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* foodGrid */}
          <div className="grid grid-cols-4 gap-6">
            {filteredFoods.map((food) => (
              <div
                key={food._id}
                className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
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
                  className="mt-3 w-full bg-orange-500 text-white py-2 rounded"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>




        {/* Right Cart */}
        <div className="w-72 bg-white p-5 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Your Feast 🍔</h2>

           {
            cart.length === 0 ? (
              <p className="text-gray-500">Cart is empty...</p>
            ) : (
              <div className="space-y-4" >
                {cart.map((item)=>(
                  <div key={item.food._id} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{item.food.name}</p>
                      <p className="text-sm text-gray-500">x{item.quantity}</p>
                    </div>
                     <p className="text-sm">
            ₹{item.food.price * item.quantity}
          </p>
                  </div>
                ))}
              </div>
            )
           }
           {/* total */}
           <div className="mt-6 border-t pt-4"><p className="font-semibold">Total : ₹{totalPrice} </p></div>

          <button className="mt-6 w-full bg-orange-500 text-white py-2 rounded">
            View Cart
          </button>
        </div>
      </div>
    </>
  );
};
export default Home;
