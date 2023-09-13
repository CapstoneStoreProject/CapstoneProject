import CatCard from "../components/CatCard"


export default function Cart({token, cat, id, cart}) {
    console.log(cart)
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
                            </div>
                        ))
                    }
            </main>
        </>
    )
}