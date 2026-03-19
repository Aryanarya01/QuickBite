import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-6">
      
      <h1 className="text-2xl font-bold mb-6">
        Admin Dashboard
      </h1>

      <div className="flex gap-6 flex-wrap">

        <Link to="/admin/add-food">
          <button className="bg-orange-500 px-5 py-2 rounded shadow hover:bg-orange-600 transition">
            Add Food
          </button>
        </Link>

        <Link to="/admin/manage-foods">
          <button className="bg-[#1a1a1a] px-5 py-2 rounded border border-gray-700 hover:border-orange-500 hover:text-orange-500 transition">
            Manage Foods
          </button>
        </Link>

        <Link to="/admin/orders">
          <button className="bg-[#1a1a1a] px-5 py-2 rounded border border-gray-700 hover:border-orange-500 hover:text-orange-500 transition">
            Orders
          </button>
        </Link>

        

      </div>

    </div>
  );
};

export default AdminDashboard;