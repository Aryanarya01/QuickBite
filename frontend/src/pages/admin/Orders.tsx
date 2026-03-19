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
        <h1>
          All Orders 📦
        </h1>
        <div>
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Total</th>
                <th>Status</th>
                <th>Update</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order:any)=>(
                <tr key={order._id}>
                  <td>{order._id.slice(-6)}</td>
                  <td>₹{order.totalPrice}</td>
                  <td><span className={`px-2 py-1 rounded text-sm ${getStatusColor(order.status)}`}>{order.status}</span></td>
                  {/* Dropdown */}
                  <td>
                    <select value={order.status} onChange={(e)=>updateStatus(order.id,e.target.value)}>
                         <option value="Pending">Pending</option>
                    <option value="Preparing">Preparing</option>
                    <option value="Out for delivery">
                      Out for delivery
                    </option>
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
    );
  };

  export default Orders;