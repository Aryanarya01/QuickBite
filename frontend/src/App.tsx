 
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import ProtectedRoute from './Components/ProtectedRoute'
import Profile from './pages/Profile'

function App() {
   

  return (
    <>
       <Routes>
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/profile' element={<ProtectedRoute>
          <Profile/>
        </ProtectedRoute>} />
       </Routes>
    </>
  )
}

export default App
