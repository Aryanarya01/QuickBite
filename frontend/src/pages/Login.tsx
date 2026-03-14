import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = ()=>{
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleLogin = (e:React.FormEvent)=>{
        e.preventDefault()
        const res = await
    }
    return(
        <>
        </>
    )
}
export default Login;