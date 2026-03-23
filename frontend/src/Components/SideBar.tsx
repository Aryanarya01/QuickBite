import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const Sidebar = ()=>{
    const {user} = useAuth();
    return(
        <div className="w-64 bg-[#1a1a1a] p-5 shadow-lg">
    
    <h1 className="text-2xl font-bold text-white mb-10">
      Quick<span className="text-orange-500">Bite</span>
    </h1>

    <div className="flex flex-col gap-5 text-gray-300">

      <Link to="/" className="hover:text-orange-500">
        Home
      </Link>
 
      <Link to="/orders" className="hover:text-orange-500">
        My Orders
      </Link>

      <Link to="/cart" className="hover:text-orange-500">
        Cart
      </Link>

      <Link to="/profile" className="hover:text-orange-500">
        Profile
      </Link>
      {
        user?.role === "admin"&&(
          <Link to="/admin" className="mt-4 font-semibold text-orange-500 hover:underline">Admin</Link>
        )
      }
    </div>

  </div>
    )
}
export default Sidebar;