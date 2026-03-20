import { useEffect, useState } from "react";
import { apiFetch } from "../api/api";
import type { Order } from "../types/Order";

const MyOrder = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  useEffect(() => {
    const fetchOrders = async () => {
      const data = await apiFetch("/orders/my");
      console.log(data);
      setOrders(data);
    };
    fetchOrders();
  }, []);

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-gray-600";
      case "Preparing":
        return "bg-orange-500";
      case "Out for delivery":
        return "bg-blue-500";
      case "Delivered":
        return "bg-green-500";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <div className="min-h-screen text-white bg-[#0f0f0f] p-6">
      <h1 className="text-2xl font-bold mb-6">My Orders 📦</h1>
      {orders.length === 0 ? (
        <p className="text-gray-400">No orders yet!</p>
      ) : (
        <div className="grid grid-cols-3 gap-6">
          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-[#1a1a1a] p-4 rounded-lg shadow hover:shadow-orange-500/30 transition"
            >
              <p className="text-sm text-gray-400">
                Order ID: {order._id.slice(-6)}
              </p>
              <p className="mt-2 text-sm">📍{order.address}</p>
              <p className="mt-2 font-semibold">₹{order.totalPrice}</p>
              <p className="mt-3">
                <span
                  className={`px-2 py-1 rounded text-sm ${getStatusStyle(order.status)}`}
                >
                  {order.status}
                </span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default MyOrder;
