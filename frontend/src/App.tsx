import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./Components/ProtectedRoute";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import MyOrder from "./pages/Myorders";
import Navbar from "./Components/Navbar";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import AdminRoute from "./Components/AdminRoute";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddFood from "./pages/admin/AddFood";
import ManageFood from "./pages/admin/ManageFood";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <MyOrder />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
        <Route path="/admin" element={<AdminRoute>
          <AdminDashboard/>
        </AdminRoute>} />
      </Routes>
      <Route path="/admin/add-food" element={<AdminRoute>
        <AddFood/>
      </AdminRoute>}/>
      <Route path="/admin/manage-foods" element={<AdminRoute>
        <ManageFood/>
      </AdminRoute>}/>
      <Route path="/admin/orders" element={<AdminRoute>

      </AdminRoute>}/>
    </>
  );
}

export default App;
