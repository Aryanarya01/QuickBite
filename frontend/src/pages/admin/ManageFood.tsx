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
      <div>
        <h1>Manage Food</h1>
        {foods.map((food: any) => (
          <div key={food._id}>
            <h3>{food.name}</h3>
            <button onClick={() => deleteFood(food._id)}>Delete</button>
            <button onClick={()=> navigate(`/admin/edit-food/${food._id}`)} >Edit</button>
          </div>
        ))}
      </div>
    </>
  );
};
export default ManageFood;
