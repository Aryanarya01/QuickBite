import { useState } from "react";
import { useCart } from "../context/CardContext";
import { useNavigate } from "react-router-dom";
import { apiFetch } from "../api/api";


const Checkout = ()=>{
    const {cart,totalPrice} = useCart();
    const [address,setAddress] = useState("");
    const navigate = useNavigate();

    const handelOrder = async()=>{
        const items = cart.map((item)=>({
            food : item.food._id,
            quantity : item.quantity,
            price : item.food.price,
        }))
        try{
            await apiFetch("/orders",{
                method : "POST",
                body : JSON.stringify({items,address})
            })
            alert("Order placed Successfully!");
            navigate("/orders")
        }catch(err:any){
            alert(err.message);
        }
    }
    return(
        <>
        <div>
            <h1>Checkout</h1>
            <input type="text" placeholder="Enter address" value={address} onChange={(e)=>setAddress(e.target.value)} />
            <h2></h2>
        </div>
        
        </>
    )
}
export default Checkout; 