import { useState } from "react";
import { apiFetch } from "../../api/api";


const AddFood = ()=>{
    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [description,setDescription] = useState("");
    const [category,setCategory] = useState("");

    const handelAdd =async ()=>{
        try{
            await apiFetch("/foods",{
                method : "POST",
                body:JSON.stringify({
                    name,price,description,category
                })
            });
            alert("Food added!");
            setName("");
            setPrice("");
            setDescription("");
            setCategory("");
        }catch(err:any){
            alert(err.message)
        }
    }
    return(
        <>
        
        </>
    )
}
export default AddFood;