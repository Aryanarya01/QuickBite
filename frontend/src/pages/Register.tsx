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
      <div className="flex items-center justify-center min-h-screen bg-gray-300">
        <form
          className="bg-white p-6 rounded-lg shadow w-80"
          onSubmit={handelRegister}
        >
          <h2 className="text-xl font-bold mb-4">Register</h2>
          <input
            type="text"
            placeholder="Enter Your Name.."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded p-2 mb-3"
          />
          <br />
          <br />
          <input
            type="email"
            placeholder="Enter Your Email.."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded p-2 mb-3"
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Enter Your Password.."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded p-2 mb-3"
          />
          <br />
          <br />
          <button
            className="w-full bg-orange-500 rounded py-2 text-white"
            type="submit"
          >
            Register
          </button>
          <br />
          <br />
          <p className="text-sm mt-2">
            Already have Account?{" "}
            <Link className="text-blue-500" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};
export default Register;
