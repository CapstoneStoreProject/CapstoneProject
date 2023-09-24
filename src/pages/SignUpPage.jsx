import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { validPassword } from '../components/regex.js'

const API_URL = 'http://localhost:4500/api'
// const API_URL = 'https://freecats.onrender.com/api'

export default function SignUpPage({setToken}) {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState(false)
    // const [pwdError, setPwdError] = useState(false);
   
   
    const navigate = useNavigate()
    async function submitForm(e) {
        e.preventDefault()
        if(!validPassword.test(password)) {
            setErrorMessage(true);
        } else { 
            const signUp = async () => {
                try {
                    const response = await fetch(`${API_URL}/users/register`, 
                    { 
                        method: "POST", 
                        headers: { 
                            "Content-Type": "application/json"
                        }, 
                        body: JSON.stringify({ 
                                name,
                                username, 
                                password
                        }) 
                    })
                    const result = await response.json();
                    const { token } = result
                    console.log(result)
                    localStorage.setItem('token', token);
                    setToken(token)
                    navigate('/')
                } catch (err) {
                    console.error(err)
                }
            }
            signUp();
        }
    }
    return (
        <div>

        <h1>Sign Up</h1>
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name: </label>
            <input
                value={name} 
                type="name"
                id="name"
                onChange={(e) => {
                    setErrorMessage('');
                    setName(e.target.value)
                }} 
            />
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
            <button type="submit">Sign Up</button>
        </form>
        {errorMessage && <p>Your password must contain at least one uppercase letter, one lowercase letter, one number and one special character.</p>}
        
        </div>
    )
}
