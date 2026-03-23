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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {foods.map((food: any) => (
            <div
              key={food._id}
              className="bg-[#1a1a1a] rounded-xl p-4 shadow hover:shadow-orange-500/30 hover:scale-105 transition"
            >
              <img
                 src={`${food.image}?w=400&h=300&fit=crop`}
          className="w-full h-40 object-cover rounded"
              />
              <h3 className="mt-3 text-lg font-semibold">{food.name}</h3>
              <p className="text-gray-300 text-sm">₹{food.price}</p>
              <p className="text-gray-400 text-sm">{food.category}</p>
              <div className="flex mt-4 gap-2">
                <button
                  className="  w-1/2 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 transition"
                  onClick={() => navigate(`/admin/edit-food/${food._id}`)}
                >
                  Edit
                </button>
                <button
                  className=" w-1/2 py-2 rounded-lg bg-red-500 bg-red transition"
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
