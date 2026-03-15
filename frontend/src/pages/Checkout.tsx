import { useState } from "react";
import { useCart } from "../context/CardContext";
import { useNavigate } from "react-router-dom";


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
            await
        }
    }
    return(
        <>
        
        
        </>
    )
}
export default Checkout; 