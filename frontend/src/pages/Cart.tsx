import { useCart } from "../context/CardContext";

const Cart = ()=>{
    const {cart,increaseQty,decreaseQty,totalPrice,removeFromCart} = useCart();
    return(
        <>
            {cart.map((item)=>(
                <div key={item.food._id}>
                    <h3>{item.food.name}</h3>
                    <p>{item.food.price}</p>
                    <button onClick={()=>increaseQty(item.food._id)}>+</button>
                    {item.quantity}
                    <button onClick={()=>decreaseQty(item.food._id)}>-</button>
                    <button onClick={()=>removeFromCart(item.food._id)}>Remove</button>
                </div>
            ))}
            <h2>Total : {totalPrice}</h2>
        </>
    )
}
export default Cart;