import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { CartItem } from "../types/Cart";
import type { Food } from "../types/Food";

interface CartContextType {
  cart: CartItem[];
  addToCart: (food: Food) => void;
  removeFromCart: (id: string) => void;
  increaseQty: (id: string) => void;
  decreaseQty: (id: string) => void;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {

  const [cart, setCart] = useState<CartItem[]>(()=>{
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(cart));
  },[cart])

  //                                  AddToCart
  const addToCart = (food: Food) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.food._id === food._id);
      if (existing) {
        return prev.map((item) =>
          item.food._id === food._id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { food, quantity: 1 }];
    });
  };
  //                                              removefromCart
  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.food._id !== id));
  };

  //                                  increaseQty
  const increaseQty = (id: string) => {
    setCart((prev) =>
      prev.map((item) =>
        item.food._id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  //                                decreaseQty
  const decreaseQty = (id: string) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.food._id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.food.price * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be inside CartProvider");
  }
  return context;
};
