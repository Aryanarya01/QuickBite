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
    return(
        <>
        
        </>
    )
}
export default Orders;