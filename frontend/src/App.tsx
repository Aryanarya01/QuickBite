import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./Components/ProtectedRoute";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import MyOrder from "./pages/Myorders";
 
import Cart from "./pages/Cart";
<<<<<<< HEAD
 
import Navbar from "./Components/Navbar";
 
 
 
 
 
=======
import Checkout from "./pages/Checkout";
>>>>>>> frontend/Logic

function App() {
  return (
    <>
    <Navbar/>
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
 
        <Route path="/cart" element={<ProtectedRoute>
          <Cart/>
        </ProtectedRoute>} />
<<<<<<< HEAD
 
=======
        <Route  path="/checkout" element={<ProtectedRoute>
          <Checkout/>
        </ProtectedRoute>}  />
>>>>>>> frontend/Logic
      </Routes>
    </>
  );
}

export default App;
