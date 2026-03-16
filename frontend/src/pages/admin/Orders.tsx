import { useEffect, useState } from "react";
import { apiFetch } from "../../api/api";

const Orders = ()=>{
    const [orders,setOrders] = useState([]);
    const fetchOrders =async ()=>{
        const data = await apiFetch("/orders");
        setOrders(data);
    }
    useEffect(()=>{
        fetchOrders();
    },[])

    const updateStatus =async (id : string,status : string)=>{
        await apiFetch(`/orders/${id}`,{
            method : "PUT",
            body:JSON.stringify({status}),
        })
        fetchOrders();
    } 

    return(
        <>
            <div>
                <h1>All Orders...</h1>
                {orders.map((order:any)=>(
                   <div key={order._id}>
                      <p>Total : {order.totalPrice}</p>
                    <p>Status : {order.status}</p>
                    <button onClick={()=>updateStatus(order._id,"preparing")}>Preparing</button>
                    <button onClick={()=>updateStatus(order._id,"delivedred")}>Delivered</button>
                    <button onClick={()=>updateStatus(order._id,"Out for delivery")}>Out for delivery</button>
                   </div>

                ))}
            </div>
        </>
    )
}
export default Orders;