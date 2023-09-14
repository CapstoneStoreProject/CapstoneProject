import { Link } from 'react-router-dom'
import CatCard from "../components/CatCard"
import { fetchCatById } from "../API"

export default function Cart({token, cat, id, cart}) {
    console.log(cart)
    async function handleClick(id, token) {
        const Cat = await fetchCatById(id, token)
    }

    return (
        <>
            <h1>Cart Page</h1>
            <main>
                {
                    cart.map((cat) => (<div key={cat.id}>
                        <CatCard
                            cat={cat}
                            token={token}
                        />
                        <p>stretch goal: insert application form link </p>
                        <button className="removeFromCartButton" onClick={() => handleClick(cat.id, token)}>Remove From Cart</button>

                            </div>
                        ))
                    }
                    <br></br>
                    <Link to="/CheckoutPage">Checkout</Link> 
            </main>
        </>
    )
}