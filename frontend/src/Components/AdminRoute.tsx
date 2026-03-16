import type { JSX } from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }: { children: JSX.Element }) => {
  const { user, loading } = useAuth();
  if (loading) return <h1>Loading...</h1>;
  if (!user || user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AdminRoute;
