import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditFood = ()=>{
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
  },[id])
    return(
        <>
        </>

    )
}
export default EditFood;