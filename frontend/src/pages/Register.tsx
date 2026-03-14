import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiFetch } from "../api/api";

const Register = ()=>{
    const navigate = useNavigate();
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handelRegister = async (e:React.FormEvent)=>{
         e.preventDefault();
         const res = await apiFetch("/auth/register",{
            method : "POST",
            body : JSON.stringify({name,email,password})
         });
         const data = await res.json();
         if(res.ok){
            alert("Registered Successfully! Please Login....");
            navigate("/login");
         }else{
            alert(data.message);
         }
    }
    return(
        <>
        </>
    )
}
export default Register;