import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Cats from './pages/cats.jsx'
import NavBar from './components/NavBar.jsx'
import LoginPage from './pages/LogInPage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'


function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  return (
    <>
      <NavBar token={token} setToken={setToken}/>
      <h1>FREE CATS</h1>
      <div>
      <Routes>
        <Route path="/LoginPage" element={<LoginPage setToken={setToken} />}/>
        <Route path="/SignUpPage" element={<SignUpPage setToken={setToken}/>}/>
        <Route path="/cats" element={<Cats />} />
      </Routes>
      </div>
    </>
  )
}

export default App
