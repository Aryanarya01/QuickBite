import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>

      <Link to="/admin/food-add">
        <button>Add Food</button>
      </Link>
      <Link to="/admin/manage-foods">
        <button>Manage Foods</button>
      </Link>
      <Link to="/admin/orders">
        <button>Orders</button>
      </Link>
    </div>
  );
};
export default AdminDashboard;
