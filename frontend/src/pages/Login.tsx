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
    navigate("/");
  } catch (err: any) {
    alert(err.message);
  }
};
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-300">
        <form onSubmit={handleLogin} className="bg-white p-6 rounded-lg shadow w-80">
          <h2 className="text-xl font-bold mb-4">Login</h2>
          <input
            type="text"
            placeholder="Enter Email.."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 mb-3 rounded"
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Enter Password.."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-2 mb-3 rounded"
          />
          <br />
          <br />
          <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded">Login</button>
          <br />
          <br />
          <p className="text-sm mt-3">
            Don't have an account? <Link className="text-blue-500" to="/register">Register</Link>
          </p>
        </form>
      </div>
    </>
  );
};
export default Login;
