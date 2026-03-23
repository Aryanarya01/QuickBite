import { useEffect, useState } from "react";
import { apiFetch } from "../../api/api";
import Sidebar from "../../Components/SideBar";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const fetchOrders = async () => {
    const data = await apiFetch("/orders");
    setOrders(data);
  };
  useEffect(() => {
    fetchOrders();
  }, []);

  const updateStatus = async (id: string, status: string) => {
    await apiFetch(`/orders/${id}`, {
      method: "PUT",
      body: JSON.stringify({ status }),
    });
    fetchOrders();
  };

  const getStatusColor = (status: string) => {
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
    <div className="flex"> 
    <Sidebar/>
    <div className="flex-1 min-h-screen bg-[#0f0f0f] text-white p-6">
      <h1 className="font-bold text-2xl mb-6">All Orders 📦</h1>
      <div className="bg-[#1a1a1a] rounded-lg shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="b-[#111] text-gray-400">
            <tr>
              <th className="p-3">Order ID</th>
              <th className="p-3">Total</th>
              <th className="p-3">Status</th>
              <th className="p-3">Update</th>
              <th className="p-3">Name</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order: any) => (
              <tr key={order._id} className="border-b border-gray-700">
                <td className="text-sm p-3">{order._id.slice(-6)}</td>
                <td className="p-3">₹{order.totalPrice}</td>
                {/* status badge */}
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-sm ${getStatusColor(order.status)}`}
                  >
                    {order.status}
                  </span>
                </td>
                {/* Dropdown */}
                <td className="p-3">
                  <select
                    value={order.status}
                    onChange={(e) => updateStatus(order._id, e.target.value)}
                    className="bg-[#0f0f0f] p-1 border border-gray-700 outline-none rounded"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Preparing">Preparing</option>
                    <option value="Out for delivery">Out for delivery</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </td>
                <td>{order.user?.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default Orders;
