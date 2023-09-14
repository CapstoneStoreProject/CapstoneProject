import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Cats from './pages/Cats.jsx'
import NavBar from './components/NavBar.jsx'
import LoginPage from './pages/LogInPage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'
import Cart from './pages/CartPage.jsx'
import HomePage from './pages/HomePage'
const API_URL = 'http://localhost:4500/api'

function App() {
  let initialState = []
  if (localStorage.getItem('cart')) {
    initialState = JSON.parse(localStorage.getItem('cart'))
  }
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [cart, setCart] = useState(initialState)

  return (
    <>
      <NavBar token={token} setToken={setToken}/>
      <h1>FREE CATS</h1>
      <div>
      <Routes>
        <Route path="/LoginPage" element={<LoginPage setToken={setToken} />}/>
        <Route path="/SignUpPage" element={<SignUpPage setToken={setToken}/>}/>
        <Route path="/" element={<Cats token={token} setCart={setCart} cart={cart}/>} />
        <Route path="/Cart" element={<Cart token={token} cart={cart}/>} />
        <Route path="/HomePage" element={<HomePage />}/>
      </Routes>
      </div>
    </>
  )
}

export default App
