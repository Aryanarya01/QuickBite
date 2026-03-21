import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { apiFetch } from "../api/api";

const Checkout = () => {
  const { cart, totalPrice } = useCart();
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handelOrder = async () => {
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
      <div className="flex items-center justify-center min-h-screen bg-gray-300">
         
        <div className="bg-white p-6 w-80 rounded-lg shadow">
          <h1 className="text-2xl font-bold text-orange-500 mb-4">Checkout</h1>
          <input
          className="w-full border p-2 mb-3 rounded"
            type="text"
            placeholder="📍Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <h2 className="text-sm font-bold">Total : ₹{totalPrice}</h2>
          <button onClick={handelOrder} className="w-full bg-">Place Order</button>
        </div>
      </div>
    </>
  );
};
export default Checkout;
