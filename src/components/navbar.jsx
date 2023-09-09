import { Link, useNavigate} from 'react-router-dom'


export default function NavBar({ token, setToken }) {
    //conditionally render links based on token
    const navigate = useNavigate()
    function handleClick() {
        setToken("")
        navigate("/LoginPage")
    }
    if (!token) {
        return (
            <div id='navbar' >
                <Link to="/SignUpPage">Sign Up</Link>
                <Link to="/LoginPage">Login</Link>
                <Link to="/Cats">Cats</Link>
            </div>
        )
    } else if (token) {
        return (
            <div id='navbar' >
                <Link to="/ProfilePage">Profile Page</Link>
                <Link to="/Cats">Cats</Link>
                <button onClick={handleClick}>Logout</button>
            </div>
        )
    }

    
}