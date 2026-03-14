import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = ()=>{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    return(
        <>
        </>
    )
}
export default Register;