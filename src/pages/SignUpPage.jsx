import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { validPassword } from '../components/regex.js'

const API_URL = 'http://localhost:4500/api'
// const API_URL = 'https://freecats.onrender.com/api'

export default function SignUpPage({setToken, cart}) {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [pwdErrorMessage, setPwdErrorMessage] = useState(false)
    const [usrErrorMessage, setUsrErrorMessage] = useState(false)
    
 
    const navigate = useNavigate()
    async function submitForm(e) {
        e.preventDefault()
        if(!validPassword.test(password)) {
            setPwdErrorMessage(true);
      
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
                    // console.log(result)
                    localStorage.setItem('token', token);
                    setToken(token)
                    localStorage.removeItem(cart)
                    navigate('/')
                } catch (err) {
                    console.error(err)
                    setUsrErrorMessage(true)
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
                        // setErrorMessage(false);
                        setName(e.target.value)
                    }} 
                />
                <label htmlFor="username">Username: </label>
                <input
                    value={username} 
                    type="username"
                    id="username"
                    onChange={(e) => {
                        setUsrErrorMessage(false);
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
                        setPwdErrorMessage(false);
                        setPassword(e.target.value)
                    }}
                    
                />
                <div>
                    <div className="row g-3 align-items-center">
                        <div>
                            <span id="passwordHelpInline" className="form-text">
                                Password must be 8-20 characters long, have at least one uppercase letter, <br></br>one lowercase letter, one number and one special character.
                            </span>
                        </div>
                    </div>
                </div>
                <br></br>
                <button type="submit">Sign Up</button>
            </form>
            {pwdErrorMessage && <p>Your password must contain at least one uppercase letter, one lowercase letter, one number and one special character.</p>}   
            {usrErrorMessage && <p>That username is already taken</p>}
        </div>
    )
}
