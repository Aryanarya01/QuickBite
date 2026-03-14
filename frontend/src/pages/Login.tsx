import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiFetch } from "../api/api";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useAuth();

  // const handleLogin = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const res = await apiFetch("/auth/login", {
  //     method: "POST",
  //     body: JSON.stringify({ email, password }),
  //   });
  //   const data = await res.json();
  //   if (res.ok) {
  //     setUser(data);
  //     navigate("/");
  //   } else {
  //     alert(data.message);
  //   }
  // };
  const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const data = await apiFetch("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    setUser(data);
    navigate("/profile");
  } catch (err: any) {
    alert(err.message);
  }
};
  return (
    <>
      <div>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Enter Email.."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Enter Password.."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button type="submit">Login</button>
          <br />
          <br />
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </>
  );
};
export default Login;
