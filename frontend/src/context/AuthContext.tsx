import { useState } from "react"
import type { User } from "../types/User"


export const Authprovider = ({}:{})=>{
    const [user,setUser] = useState<User|null>(null);
    const [loading,setLoading] = useState<boolean>(true);


    //
}