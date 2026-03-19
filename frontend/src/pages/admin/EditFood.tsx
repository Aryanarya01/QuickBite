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
      await apiFetch(`/foods/${id}`,{
        method : "PUT",
        body :JSON.stringify({name,price,category,description}),
    });
     alert("Updated Succesfully!");
    navigate("/admin/manage-foods")
   }catch(err :any){
    alert(err.message)
   }
  }
    return(
        <>
        <div className="min-h-screen text-white bg-[#0f0f0f] flex items-center justify-between ">
            <div className="bg-[#1a1a1a] p-6 rounded-lg w-96 shadow">
                 <h2 className="text-xl font-bold mb-4">
              Edit Food 🍔
            </h2>
                <input className="p-2 mb-3 w-full bg-[#0f0f0f] border outline-none border-gray-700 rounded" value={name} placeholder="Food Name" onChange={(e)=>setName(e.target.value)} />
                <input className="p-2 mb-3 w-full bg-[#0f0f0f] border outline-none border-gray-700 rounded" value={price} placeholder="Price" onChange={(e)=>setPrice(e.target.value)} />
                <input className="p-2 mb-3 w-full bg-[#0f0f0f] border outline-none border-gray-700 rounded" value={description} placeholder="Description" onChange={(e)=>setDescription(e.target.value)} />
                <input className="p-2 mb-3 w-full bg-[#0f0f0f] border outline-none border-gray-700 rounded" value={category} placeholder="Category" onChange={(e)=>setCategory(e.target.value)} />
                <button className="" onClick={handelUpdate}>Update Food</button>
            </div>
        </div>
        </>
        

    )
}
export default EditFood;