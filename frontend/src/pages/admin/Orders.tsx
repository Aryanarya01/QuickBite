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
                    <p>Total : {order.totalPrice}</p>
                    <p>Status : {order.status}</p>
                ))}
            </div>
        </>
    )
}
export default Orders;