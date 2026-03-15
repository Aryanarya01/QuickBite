import { useEffect, useState } from "react";
import type { Food } from "../types/Food";
import { apiFetch } from "../api/api";


const Home = ()=>{
    const [foods,setFoods] = useState<Food[]>([]);
    useEffect(()=>{
        const fetchFood = async ()=>{
            const data = await apiFetch("/foods");
            setFoods(data);
        }
        fetchFood();
    },[])
    return(
        <>
            <div>
                <h1>Foods</h1>
                {
                    foods.map((food)=>(
                        <div key={food._id}>
                            <h3>{food.name}</h3>
                            <p>{food.price}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
export default Home;