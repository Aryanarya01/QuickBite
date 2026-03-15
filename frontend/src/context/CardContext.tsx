import { createContext } from "react";
import type { CartItem } from "../types/Cart";
import type { Food } from "../types/Food";

interface CartContextType{
    cart : CartItem[],
    addToCart : (food:Food)=> void,
    removeFromCart : (id:string)=>void,
    increaseQty : (id:string)=>void,
    decreaseQty : (id:string)=>void,
    totalPrice : number

}

const CartContext = createContext<CartContextType|null>(null);
