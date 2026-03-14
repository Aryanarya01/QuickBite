import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiFetch } from "../api/api";
import { useAuth } from "../context/AuthContext";


const Login = ()=>{
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const {setUser} = useAuth();

    const handleLogin = async (e:React.FormEvent)=>{
        e.preventDefault()
        const res = await apiFetch("/auth/login",{
            method:"POST",
            body : JSON.stringify({email,password})
        })
        const data = await res.json();
        if(res.ok){
            setUser(data);
            navigate("/");
        }else{
            alert(data.message);
        }
    }
    return(
        <>
        <div>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Enter Email.." value={email} onChange={(e)=>setEmail(e.target.value)} />
                <input type="text" placeholder="Enter Password.." value={password} onChange={(e)=>setPassword(e.target.value)} />
                 
            </form>
        </div>
        </>
    )
}
export default Login;