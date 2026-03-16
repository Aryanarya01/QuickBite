import type { JSX } from "react";
import { useAuth } from "../context/AuthContext";


const AdminRoute = ({children}:{children : JSX.Element})=>{

    const {user,loading} = useAuth();


    return
}

export default AdminRoute;