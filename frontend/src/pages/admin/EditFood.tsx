import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apiFetch } from "../../api/api";

const EditFood = ()=>{
    const navigate = useNavigate();
    const {id} = useParams();
    const [name,setName] = useState("");
  const [price,setPrice] = useState("");
  const [description,setDescription] = useState("");
  const [category, setCategory] = useState("");

  useEffect(()=>{
     const fetchFood = async()=>{
        const res = await fetch(`http://localhost:5000/api/foods/${id}`);
        const data = await res.json();
        setName(data.name);
        setPrice(data.price);
        setDescription(data.description);
        setCategory(data.category);
     }
     fetchFood();
  },[id]);

  const handelUpdate = async()=>{
   try{
     const data = await apiFetch(`/foods/${id}`,{
        method : "PUT",
        body :JSON.stringify({name,price,category,description}),
    });
     alert("Updated Succesfully!");
    navigate("/")
   }catch(err :any){
    alert(err.message)
   }
  }
    return(
        <>
        <div>
            <input value={name} onChange={(e)=>setName(e.target.value)} />
            <input value={price} onChange={(e)=>setPrice(e.target.value)} />
            <input value={description} onChange={(e)=>setDescription(e.target.value)} />
            <input value={category} onChange={(e)=>setCategory(e.target.value)} />
            <button onClick={handelUpdate}>Update Food</button>
        </div>
        </>
        

    )
}
export default EditFood;