import { useEffect, useState } from "react";
import type { Food } from "../types/Food";
import { apiFetch } from "../api/api";
import { useCart } from "../context/CardContext";


const Home = () => {
  const {addToCart} = useCart();

  const [foods, setFoods] = useState<Food[]>([]);
  useEffect(() => {
    const fetchFood = async () => {
      const data = await apiFetch("/foods");
      setFoods(data);
    };
    fetchFood();
  }, []);
  return (
    <>
      <div>
        <h1>Foods</h1>
        {foods.map((food) => (
          <div key={food._id}>
            <h3>{food.name}</h3>
            <p>{food.price}</p>
            <button onClick={()=>addToCart(food)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
};
export default Home;
