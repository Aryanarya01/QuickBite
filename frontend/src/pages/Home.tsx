import { useEffect, useState } from "react";
import type { Food } from "../types/Food";


const Home = ()=>{
    const [food,setFood] = useState<Food[]>([]);
    useEffect(()=>{
        const fetchFood = async ()=>{
        }
    },[])
    return(
        <>
        
        </>
    )
}
export default Home;