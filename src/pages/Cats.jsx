import { useState, useEffect } from 'react';
import CatCard from "../components/CatCard";
import { fetchCatById, fetchCats } from "../API/index.js"

//get all cats and map them
export default function Cats({token, cat, id, cart, setCart}) {
    // const { id, name, imgurl, age, sex, color, description, breed, price } = cat;
    const [cats, setCats] = useState([]);
    const [breeds, setBreeds] = useState([])
    // const [errorMessage, setErrorMessage] = useState("")
    async function fetchData() {
        const data = await fetchCats()
        // console.log(data)
        // const breeds = data.map(cat =>)
        setCats(data)
    }

    async function handleClick(id, token, cart) {
        // console.log("id", id)
        const Cat = await fetchCatById(id, token)
        // console.log(Cat)
        if (token) {
            if (cart.includes(Cat) === false) {
                try {
                    setCart([...cart, Cat])
                    let cartString = JSON.stringify(cart)
                    localStorage.setItem('cart', cartString)
                    console.log(cart)
                } catch(err) {
                    console.error(err)
                }
            } else {
                console.log("You already added this cat to your cart")
            }
                
        } else {
            console.log("You must be logged in to add to cart")
//HOW DO I GET THE ERROR MESSAGE TO DISPLAY ON THE SCREEN WHERE THE USER CAN SEE IT?
            // setErrorMessage("You must be logged in to add to cart")
        }
    }
    
    useEffect(() => {
        fetchData()
    }, []) 
    // console.log(cart)
    if (token) {
        return (
            <>
                <h1>CATS IN NEED OF HOMES</h1>
                <main>
                    {
                        cats.map((cat) => (
                        <div className='cat' key={cat.id}>
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
    } else {
        return (
            <>
                <h1>CATS IN NEED OF HOMES</h1>
                <main>
                    {
                        cats.map((cat) => (
                        <div className='cat' key={cat.id}>
                            <CatCard
                                cat={cat}
                                token={token}
                                fetchData={fetchData}
                            />
                            <p>You must login to select a cat to adopt</p>
                            </div>
                        ))
                    }
                </main>
            </>
        )
    }
    
    
}