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
  return (
    <>
      <div>
        <h1>My Orders...</h1>
        {orders.length === 0 && <p>No orders yet!</p>}
        {orders.map((order) => (
          <div key={order._id}>
            <p>Order ID: {order._id}</p>
            <p>Address :{order.address}</p>
            <p>Total : {order.totalPrice}</p>
            <p>Status : {order.status}</p>
          </div>
        ))}
      </div>
    </>
  );
};
export default MyOrder;
