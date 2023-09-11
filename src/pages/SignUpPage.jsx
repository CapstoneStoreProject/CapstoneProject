import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const API_URL = 'http://localhost:4500/api'

export default function SignUpPage({setToken}) {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const navigate = useNavigate()
    async function submitForm(e) {
        e.preventDefault()
        if (password.length < 8) {
            setErrorMessage("Password is too short");
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
        </div>
    )
}
