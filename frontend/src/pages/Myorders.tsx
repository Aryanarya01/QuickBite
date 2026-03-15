import { useEffect, useState } from "react"
import { apiFetch } from "../api/api";


const MyOrder = ()=>{
    const [orders,setOrders] = useState([]);
        useEffect(()=>{
            const fetchOrders = async ()=>{
                const data = await apiFetch("/orders/my");
                 setOrders(data);
            }
            fetchOrders();
        },[])
    return(
        <>
        </>
    )
}
export default MyOrder