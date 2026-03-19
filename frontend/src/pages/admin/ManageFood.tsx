import { useEffect, useState } from "react";
import { apiFetch } from "../../api/api";
import { useNavigate } from "react-router-dom";

const ManageFood = () => {
  const navigate = useNavigate();
  const [foods, setFoods] = useState([]);
  // const [editingFood,setEditingFood] = useState<any>(null);
  // const [name,setName] = useState("");
  // const [price,setPrice] = useState("");
  // const [description,setDescription] = useState("");
  // const [category, setCategory] = useState("");
  // const [image,setImage] = useState<File|null>(null);

  //   const handelEdit = (food:any)=>{
  //       setEditingFood(food);
  //       setName(food.name);
  //       setPrice(food.price)
  //       setDescription(food.description);
  //       setCategory(food.category)
  //   }
  const fetchFood = async () => {
    const data = await apiFetch("/foods");
    setFoods(data);
  };

  useEffect(() => {
    fetchFood();
  }, []);
  const deleteFood = async (id: string) => {
    await apiFetch(`/foods/${id}`, {
      method: "DELETE",
    });
    fetchFood();
  };
  return (
    <>
      <div className="min-h-screen bg-[#0f0f0f] text-white p-6">
        <h1 className="text-2xl font-bold mb-6">Manage Food 🍔</h1>
        <div className="grid grid-cols-4 gap-8">
          {foods.map((food: any) => (
            <div
              key={food._id}
              className="bg-[#1a1a1a] rounded-lg p-4 shadow hover:shadow-orange-500/30 transition"
            >
              <img
                src={food.image}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="mt-3 text-lg font-semibold">{food.name}</h3>
              <p className="text-gray-400 text-sm">₹{food.price}</p>
              <p className="text-gray-500 text-sm line-clamp-2">
                {food.description}
              </p>
              <p className="text-xs text-orange-500 mt-1">{food.category}</p>
              <div className="flex justify-between mt-4">
                <button
                  className="px-3 border border-gray-600 py-1 rounded hover:border-orange-500 hover:text-orange-500 transition"
                  onClick={() => navigate(`/admin/edit-food/${food._id}`)}
                >
                  Edit
                </button>
                <button
                  className="px-3 py-1 bg-red-500 hover:bg-red-600 transition rounded"
                  onClick={() => deleteFood(food._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default ManageFood;
