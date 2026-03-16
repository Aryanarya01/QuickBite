import { useState } from "react";
import { apiFetch } from "../../api/api";


const ManageFood = ()=>{
    const [foods,setFoods] = useState([]);
    const fetchFood = async ()=>{
        const data = await apiFetch("/foods");
        setFoods(data);
    }
    
    return(

        <>
        
        </>
    )
}
export default ManageFood;