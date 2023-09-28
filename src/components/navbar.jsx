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
            <>
            <div className="navDiv">
                <nav className="navbar sticky-top bg-body-tertiary navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Purrfect Match</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link to="/SignUpPage" className="nav-link"  href="#">Sign Up</Link>
                                <Link to="/LoginPage" className="nav-link" href="#">Log In</Link>
                                <Link to="/" className="nav-link" href="#">Cats</Link>
                                <Link to="/HomePage" className="nav-link" href="#">Home</Link>
                            </div>
                        </div>
                    </div>
                </nav>
                </div>
            </>
        )
    } else if (token && cart.length === 0) {
        return(
            <>
                <nav className="navbar sticky-top bg-body-tertiary navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Purrfect Match</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link to="/HomePage" className="nav-link" href="#">Home</Link>
                                <Link to="/" className="nav-link" href="#">Cats</Link>
                                <Link to="/Cart" className="nav-link disabled" aria-disabled="true" href="#"><span>Cart <sup>{cart.length}</sup></span></Link>
                                <button className="nav-link" onClick={handleClick}>Logout</button>
                            </div>
                        </div>
                    </div>
                </nav>
            </>
        )
    } else if (token) {
        return(
            <>
                <nav className="navbar sticky-top bg-body-tertiary navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Purrfect Match</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link to="/HomePage" className="nav-link" href="#">Home</Link>
                                <Link to="/" className="nav-link" href="#">Cats</Link>
                                <Link to="/Cart" className="nav-link"  href="#"><span>Cart <sup>{cart.length}</sup></span></Link>
                                <button className="nav-link" onClick={handleClick}>Logout</button>
                            </div>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
