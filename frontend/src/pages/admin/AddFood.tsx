import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../Components/SideBar";

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
    <div className="flex"> 
      <Sidebar/>
      <div className="flex-1 min-h-screen bg-[#0f0f0f] text-white flex items-center justify-center">
        <div className="bg-[#1a1a1a] p-6 rounded-lg w-96 shadow">
          <h1 className="text-xl font-bold mb-4">Add Food 🍔</h1>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 mb-3 border bg-[#0f0f0f] outline-none rounded border-gray-700"
          />
          <input
            type="file"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
            className="w-full text-sm mb-3 text-gray-400"
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-2 mb-3 border bg-[#0f0f0f] outline-none rounded border-gray-700"
          />
          <input
            type="text"
            placeholder="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 mb-3 border bg-[#0f0f0f] outline-none rounded border-gray-700"
          />
          <input
            type="text"
            placeholder="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 mb-3 border bg-[#0f0f0f] outline-none rounded border-gray-700"
          />
          <button
            className="w-full bg-orange-500 hover:bg-orange-600 rounded transition py-2"
            onClick={handelAdd}
          >
            Add Food
          </button>
        </div>
      </div>
      </div>
    </>
  );
};
export default AddFood;
