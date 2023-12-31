import { Link } from 'react-router-dom'
import CatCard from "../components/CatCard"
import { fetchCatById } from "../API"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Cart({token, cat, id, cart, setCart}) {
    console.log(cart)
    const navigate = useNavigate()
    // const [catCart, setCatCart] = useState([])
    async function deleteCat(id) {
        // const Cat = await fetchCatById(id, token)
        setCart(cart.filter(cat => cat.id !== id))
        navigate('/')
    }

    return (
        <>
            <h1>Cart</h1>
            <main>
                {
                    cart.map((cat) => (
                        <div className='cat' key={cat.id}>
                            <CatCard
                                cat={cat}
                                token={token}
                            />
                            <p>stretch goal: insert application form link </p>
                            <button className="removeFromCartButton" onClick={() => deleteCat(cat.id)}>Remove From Cart</button>
                        </div>
                        ))
                    }
                    <br></br>
                    <Link to="/CheckoutPage" className="btn btn-success checkout">Checkout</Link> 
            </main>
        </>
    )
}