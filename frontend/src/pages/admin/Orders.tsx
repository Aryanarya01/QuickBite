import { useEffect, useState } from "react";
import { apiFetch } from "../../api/api";

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
        return "gray";
      case "Preparing":
        return "orange";
      case "Out for delivery":
        return "blue";
      case "Delivered":
        return "green";
      default:
        return "black";
    }
  };

  return (
    <div>
      <h1>All Orders...</h1>

      {orders.map((order: any) => (
        <div key={order._id} style={{ marginBottom: "10px" }}>
          <p>Total: {order.totalPrice}</p>

          {/* Status text with color */}
          <p style={{ color: getStatusColor(order.status) }}>
            Status: {order.status}
          </p>

          {/* ✅ Dropdown instead of buttons */}
          <select
            value={order.status}
            onChange={(e) =>
              updateStatus(order._id, e.target.value)
            }
          >
            <option value="Pending">Pending</option>
            <option value="Preparing">Preparing</option>
            <option value="Out for delivery">
              Out for delivery
            </option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>
      ))}
    </div>
  );
};

export default Orders;