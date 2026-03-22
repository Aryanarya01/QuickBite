import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-6">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard ⚙️</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Add food */}
        <Link to="/admin/add-food">
          <div className="bg-[#1a1a1a] p-6 rounded-xl text-center hover:scale-105 shadow hover:shadow-orange-500/30 transition curser-pointer">
            <h2 className="text-xl font-semibold mb-2">➕ Add Food</h2>
            <p className="text-gray-400 text-sm"> Add new food items to menu</p>
          </div>
        </Link>

        {/* Manage food */}
        <Link to="/admin/manage-foods">
          <div className="bg-[#1a1a1a] p-6 rounded-xl shadow hover:shadow-orange-500 hover:text-orange-500 transition">
            Manage Foods
          </div>
        </Link>

        {/* orders */}
        <Link to="/admin/orders">
          <div className="bg-[#1a1a1a] p-6 rounded-xl shadow hover:shadow-orange-500 hover:text-orange-500 transition">
            Orders
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
