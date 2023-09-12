import { useState, useEffect } from 'react';
import CatCard from "../components/CatCard";
import { fetchCatById, fetchCats } from "../API/index.js"

//get all cats and map them
export default function Cats({token, cat, id}) {
    // const { id, name, imgurl, age, sex, color, description, breed, price } = cat;
    const [cats, setCats] = useState([]);
    const [cart, setCart] = useState([])
    async function fetchData() {
        const data = await fetchCats()
        console.log(data)
        setCats(data)
        
    }
    async function handleClick(id, token) {
        console.log("id", id)
        const Cat = await fetchCatById(id, token)
        console.log(Cat)
        if (token) {
            try {
                cart.push(Cat)

                setCart(() => [...cart])
                // setCart(Cat)
                console.log(cart)
            } catch(err) {
                console.error(err)
            }
        } else {
            console.log("You must be logged in to add to cart")
        }
    }
    useEffect(() => {
        fetchData()
    }, []) 
    return (
        <>
            <h1>CATS IN NEED OF HOMES</h1>
            <main>
                {
                    cats.map((cat) => (<div key={cat.id}>
                        <CatCard
                            cat={cat}
                            token={token}
                            fetchData={fetchData}
                        />
                        <button className="addToCartButton" onClick={() => handleClick(cat.id, token)}>Add to Cart</button>
                        </div>
                    ))
                }
            </main>
        </>
    )
}