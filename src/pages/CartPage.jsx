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
                            // fetchData={fetchData}
                        />
                        <button className="removeFromCartButton" onClick={() => handleClick(cat.id, token)}>Remove From Cart</button>

                            </div>
                        ))
                    }
            </main>
        </>
    )
}