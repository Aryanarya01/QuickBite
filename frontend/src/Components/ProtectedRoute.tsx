import { useAuth } from "../context/AuthContext"

const ProtectedRoute = ({children}:{children:JSX.Element})=>{
    const {user,loading} = useAuth();



    return children;
}

