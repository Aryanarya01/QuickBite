import { useCart } from "../context/CardContext";

const Cart = ()=>{
    const {cart,increaseQty,decreaseQty,totalPrice,removeFromCart} = useCart();
    return(
        <>
            {cart.map((item)=>(
                <div key={item.food._id}>
                    <h3>{item.food.name}</h3>
                    <p>{item.food.price}</p>

                </div>
            ))}
        </>
    )
}
export default Cart;