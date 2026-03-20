import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, increaseQty, decreaseQty, totalPrice, removeFromCart } =
    useCart();
  return (
    <>
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-6">Your Cart 🛒</h1>
        {cart.length === 0 ? (
          <p className="text-gray-500">Cart is empty</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.food._id}
                className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
              >
                <div>
                  <h3 className="font-semibold">{item.food.name}</h3>
                  <p className="text-gray-500">₹{item.food.price}</p>
                </div>

                {/* quantity */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => decreaseQty(item.food._id)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => increaseQty(item.food._id)}
                    className="px-2 py-1 bg-orange-500 rounded"
                  >
                    +
                  </button>
                </div>

                {/* Price */}
                <p className="font-medium">
                  ₹{item.food.price * item.quantity}
                </p>

                {/* Remove */}
                <button
                  onClick={() => removeFromCart(item.food._id)}
                  className="text-red-500"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
        {/* Total + Checkout */}
        <div className="mt-8 bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Total: ₹{totalPrice}</h2>

          <Link to="/checkout">
            <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Cart;
