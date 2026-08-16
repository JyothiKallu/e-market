
import { Routes, Route } from 'react-router-dom'
import Login from './Login/Login'
import Signup from './Login/Signup'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Login />} />
    </Routes>
  )
}

export default App
