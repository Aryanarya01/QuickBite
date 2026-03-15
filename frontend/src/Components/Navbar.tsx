import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  return (
    <nav>
      <Link to="/">Home</Link>

      {user && (
        <>
          <Link to="/cart">Cart</Link>
          <Link to="/orders">My Orders</Link>
          <button onClick={logout}>Logout</button>
        </>
      )}
      {!user && (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
};
export default Navbar;
