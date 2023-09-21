import { Link, useNavigate} from 'react-router-dom'


export default function NavBar({ token, setToken, cart }) {
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
                <Link to="/">Cats</Link>
                <Link to="/HomePage">Home</Link>
            </div>
        )
    } else if (token) {
        return (
            <div id='navbar' >
                <Link to="/HomePage">Home</Link>
                <Link to="/">Cats</Link>
                <Link to="/Cart"> <span>Cart <sup>{cart.length}</sup></span></Link>
                <button onClick={handleClick}>Logout</button>
            </div>
        )
    }

    
}