import { useEffect, useState } from "react";
import { apiFetch } from "../../api/api";

const ManageFood = () => {
  const [foods, setFoods] = useState([]);
  const [editingFood,setEditingFood] = useState<any>(null);
  const [name,setName] = useState("");
  const [price,setPrice] = useState("");
  const [description,setDescription] = useState("")
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
      <div>
        <h1>Manage Food</h1>
        {foods.map((food: any) => (
          <div key={food._id}>
            <h3>{food.name}</h3>
            <button onClick={() => deleteFood(food._id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};
export default ManageFood;
