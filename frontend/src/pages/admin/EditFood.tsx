import { useState } from "react";
import { useParams } from "react-router-dom";

const EditFood = ()=>{
    const {id} = useParams();
    const [name,setName] = useState("");
  const [price,setPrice] = useState("");
  const [description,setDescription] = useState("");
  const [category, setCategory] = useState("");
    return(
        <>
        </>

    )
}
export default EditFood;