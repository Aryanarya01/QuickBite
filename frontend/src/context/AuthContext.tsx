import { createContext, useState, type ReactNode } from "react"
import type { User } from "../types/User"
import type { AuthContextType } from "../types/AuthContexTypes";

export const AuthContext = createContext<AuthContextType|null>(null)
export const Authprovider = ({children}:{children : ReactNode})=>{
    const [user,setUser] = useState<User|null>(null);
    const [loading,setLoading] = useState<boolean>(true);


    //  Auto login check
}