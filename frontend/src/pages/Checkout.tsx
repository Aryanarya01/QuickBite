import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { apiFetch } from "../api/api";

const Checkout = () => {
  const { cart, totalPrice } = useCart();
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handelOrder = async () => {
    if(!address){
      alert("Please enter address");
      return;
    }
    const items = cart.map((item) => ({
      food: item.food._id,
      quantity: item.quantity,
      price: item.food.price,
    }));
    try {
      await apiFetch("/orders", {
        method: "POST",
        body: JSON.stringify({ items, address }),
      });
      alert("Order placed Successfully!");
      localStorage.removeItem("cart")
      navigate("/orders");
    } catch (err: any) {
      alert(err.message);
    }
  };
  return (
    <>
    <div className="flex"> 
    <Sidebar/>
      <div className="flex items-center justify-center text-black min-h-screen bg-[#0f0f0f]">
         
        <div className="bg-[#1a1a1a] p-8 w-full rounded-xl max-w-md shadow-lg">
          <h1 className="text-2xl font-bold text-orange-500 mb-4">Checkout 🧾</h1>
          <input
          className="w-full border border-gray-700 outline-none p-3 mb-4 rounded-lg"
            type="text"
            placeholder="📍Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <div className="flex items-center justify-between mb-6">
            <span className="text-gray-400">Total Amount</span>
            <span className="text-orange-400 text-lg font-semibold">₹{totalPrice}</span>
          </div>
          <button onClick={handelOrder} className="w-full bg-orange-500 rounded-lg py-3 active:scale-95 hover:bg-orange-600 transition">Place Order 🚀</button>
        </div>
      </div>
    </>
  );
};
export default Checkout;
