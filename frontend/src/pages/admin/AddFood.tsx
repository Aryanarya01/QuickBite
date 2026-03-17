import { useState } from "react";
import { apiFetch } from "../../api/api";

const AddFood = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image,setImage] = useState<File|null>(null)

  const handelAdd = async () => {
    try {
      await apiFetch("/foods", {
        method: "POST",
        body: JSON.stringify({
          name,
          price,
          description,
          category,
        }),
      });
      alert("Food added!");
      setName("");
      setPrice("");
      setDescription("");
      setCategory("");
    } catch (err: any) {
      alert(err.message);
    }
  };
  return (
    <>
      <div>
        <h1>Add Food</h1>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="file" onChange={(e)=>setImage(e.target.files?.[0]||null)} />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button onClick={handelAdd}>Add Food</button>
      </div>
    </>
  );
};
export default AddFood;
