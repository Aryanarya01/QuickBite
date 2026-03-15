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
        {orders.map((order) => (
          <div key={order._id}>
            <p>Total : {order.totalPrice}</p>
            <p>Status : {order.status}</p>
          </div>
        ))}
      </div>
    </>
  );
};
export default MyOrder;
