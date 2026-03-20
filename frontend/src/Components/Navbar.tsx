import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  return (
    <nav className="flex items-center justify-between px-6 py-3 text-white bg-[#1a1a1a]">
      {/* Left */}
      <Link to="/" className="text-xl font-bold text-orange-500">QuickBite</Link>

    {/* Right */}
      <div className="flex gap-4 items-center">
        {user && (
          <>
            <button className="bg-orange-500 rounded py-1 px-4 hover:bg-orange-600" onClick={logout}>Logout</button>
          </>
        )}
        {!user && (
          <>
            <Link className="hover:text-orange-500" to="/login">Login</Link>
            <Link className="hover:text-orange-500" to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
