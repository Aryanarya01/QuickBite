import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, increaseQty, decreaseQty, totalPrice, removeFromCart } =
    useCart();
  return (
    <>
      <div className="p-6 bg-[#0f0f0f] min-h-screen text-white">
        <h1 className="text-2xl font-bold mb-6">Your Cart 🛒</h1>
        {cart.length === 0 ? (
          <p className="text-gray-400">Your cart is empty 🥲</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.food._id}
                className="p-4 rounded-xl shadow flex justify-between items-center bg-[#1a1a1a]"
              >
                {/* Left */}
                <div className="flex items-center gap-4"> 
                  <img src={`${item.food.image}?w=100&h=100&fit=crop`} className="w-16 h-16 object-cover rounded"/>
                <div>
                  <h3 className="font-semibold">{item.food.name}</h3>
                  <p className="text-sm text-gray-400">₹{item.food.price}</p>
                </div>
                </div>
                {/* Middle quantity */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => decreaseQty(item.food._id)}
                    className="px-2 py-1 bg-gray-700 rounded"
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => increaseQty(item.food._id)}
                    className="px-2 py-1 bg-gray-700 rounded"
                  >
                    +
                  </button>
                </div>
              {/* right */}
              <div className="text-right">
                {/* Price */}
                <p className="text-orange-400 font-semibold">
                  ₹{item.food.price * item.quantity}
                </p>

                {/* Remove */}
                <button
                  onClick={() => removeFromCart(item.food._id)}
                  className="text-red-400 text-sm mt-1"
                >
                  Remove
                </button>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* Total + Checkout */}
        <div className="mt-8 bg-[#1a1a1a] p-5 rounded-xl shadow">
          <h2 className="text-xl font-semibold">Total: ₹{totalPrice}</h2>

          <Link to="/checkout">
            <button className="mt-4 block w-full bg-orange-500 text-white py-2 rounded-lg">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Cart;
