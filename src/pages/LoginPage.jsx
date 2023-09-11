import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const API_URL = 'http://localhost:4500/api'

export default function LoginPage({setToken}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
  
    const navigate = useNavigate()
    async function submitForm(e) {
      e.preventDefault()
      const login = async () => {
        try {
            const response = await fetch(`${API_URL}/users/login`, 
            { 
                method: "POST", 
                headers: { 
                    "Content-Type": "application/json" 
                }, 
                body: JSON.stringify({ 
                        username, 
                        password 
                }) 
            })
            const result = await response.json();
            if (result.success) {
              const { token } = result.data
              localStorage.setItem('token', token);
              setToken(token)
              navigate('/')
            } else {
              setErrorMessage(result.error.message)
            }   
            console.log(result)
            
        } catch (err) {
            console.error(err)
        }          
    }
      login()
    }
    
    return (
      <div>
       
        <h1>Log In</h1>
        <form onSubmit={submitForm}>
          <label htmlFor="username">Username: </label>
          <input
            value={username} 
            type="username"
            id="username"
            onChange={(e) => {
              setErrorMessage('');
              setUsername(e.target.value)
            }} 
          />
          <br></br>
          <label htmlFor="password">Password: </label>
          <input
            value={password}
            type="password"
            id="password"
            onChange={(e) => {
              setErrorMessage('');
              setPassword(e.target.value)
            }}
          />
          <p>{errorMessage}</p>
          <button type="submit">Log In</button>
        </form>
      </div>
    )
  }
