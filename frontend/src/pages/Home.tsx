import { useEffect, useState } from "react";
import type { Food } from "../types/Food";
import { apiFetch } from "../api/api";
import { useCart } from "../context/CardContext";


const Home = () => {
  const {addToCart} = useCart();

  const [foods, setFoods] = useState<Food[]>([]);
  useEffect(() => {
    const fetchFood = async () => {
      const data = await apiFetch("/foods");
      setFoods(data);
    };
    fetchFood();
  }, []);
  return (
    <>
      <div className="flex h-screen bg-gray-100">
        {/* Slidebar */}
      <div className="w-64 bg-white p-5 shadow-md">
          <h1 className="text-2xl font-bold text-orange-500 mb-8">
          quickBite
        </h1>
        <ul className="space-y-5">
          <li className="text-orange-500 font-semibold">Home</li>
          <li>Explore</li>
          <li>My Orders</li>
          <li>Cart</li>
          <li>Profile</li>
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6 overflow-y-auto ">
        <h1 className="text-3xl font-bold mb-6">Welcome to quickBite 👋</h1>
         <input
          type="text"
          placeholder="Search food..."
          className="w-full p-3 rounded-full border mb-6"
        />


        {/* foodGrid */}
        <div className="grid grid-cols-4 gap-6">
        {foods.map((food) => (
          <div key={food._id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <img src={food.image} className="w-full h-40 object-cover rounded" />
            <h3 className="mt-3 font-semibold text-lg">{food.name}</h3>
             <p className="text-gray-600 text-sm">
                ₹{food.price}
              </p>

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
         <h2 className="text-xl font-semibold mb-4">
          Your Feast 🍔
        </h2>

        <p>Cart items here...</p>

        <button className="mt-6 w-full bg-orange-500 text-white py-2 rounded">
          View Cart
        </button>
      </div>
      </div>

      
    </>
  );
};
export default Home;


 