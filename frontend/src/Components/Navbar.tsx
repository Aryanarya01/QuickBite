import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


const Navbar = ()=>{

    const {user,logout} = useAuth();
    return(
        <>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    )
}
export default Navbar;