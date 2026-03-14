import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiFetch } from "../api/api";


const Login = ()=>{
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleLogin = async (e:React.FormEvent)=>{
        e.preventDefault()
        const res = await apiFetch("/auth/login",{
            method:"POST",
            body : JSON.stringify({email,password})
        })
    }
    return(
        <>
        </>
    )
}
export default Login;