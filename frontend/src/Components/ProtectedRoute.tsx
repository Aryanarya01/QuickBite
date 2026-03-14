import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"

const ProtectedRoute = ({children}:{children:JSX.Element})=>{
    const {user,loading} = useAuth();

    if(loading){
        return <h2>Loading...</h2>
    }

    if(!user){
        return <Navigate to="/login" replace />
    }

    return children;
    
}

