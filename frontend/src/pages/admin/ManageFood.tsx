import { useEffect, useState } from "react";
import { apiFetch } from "../../api/api";


const ManageFood = ()=>{
    const [foods,setFoods] = useState([]);
    const fetchFood = async ()=>{
        const data = await apiFetch("/foods");
        setFoods(data);
    }

    useEffect(()=>{
        fetchFood();
    },[])
    const deleteFood = async(id : string)=>{
        await apiFetch(`/foods/${id}`,{
            method:"DELETE"
        })
    }
    return(

        <>
        
        </>
    )
}
export default ManageFood;