import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddFood = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handelAdd = async () => {
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("category", category);
      if (image) {
        formData.append("image", image);
      }
      const res = await fetch("http://localhost:5000/api/foods", {
        method: "POST",
        credentials: "include",
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) {
        alert(data.message);
        return;
      }
      alert("Food added!");
      navigate("/admin/manage-foods");
    } catch (err: any) {
      alert(err.message);
    }
  };
  return (
    <>
      <div className="min-h-screen bg-[#0f0f0f] text-white flex items-center justify-center">
        <div className="bg-[#1a1a1a] p-6 rounded-lg w-96 shadow">
          <h1 className="">Add Food 🍔</h1>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="file"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
          />
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
      </div>
    </>
  );
};
export default AddFood;
