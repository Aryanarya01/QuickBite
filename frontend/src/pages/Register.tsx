import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiFetch } from "../api/api";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handelRegister = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const res = await apiFetch("/auth/register", {
  //     method: "POST",
  //     body: JSON.stringify({ name, email, password }),
  //   });
  //   const data = await res.json();
  //   if (res.ok) {
  //     alert("Registered Successfully! Please Login....");
  //     navigate("/login");
  //   } else {
  //     alert(data.message);
  //   }
  // };
  const handelRegister = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    await apiFetch("/auth/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
    });

    alert("Registered Successfully! Please Login....");
    navigate("/login");
  } catch (err: any) {
    alert(err.message);
  }
};
  return (
    <>
      <div>
        <form onSubmit={handelRegister}>
          <input
            type="text"
            placeholder="Enter Your Name.."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br />
          <input
            type="email"
            placeholder="Enter Your Email.."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Enter Your Password.."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button type="submit">Register</button>
          <br />
          <br />
          <p>
            Already have Account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </>
  );
};
export default Register;
