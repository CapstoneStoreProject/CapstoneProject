import { useState, useEffect } from 'react';
import CatCard from "../components/CatCard";
import { fetchCatById, fetchCats } from "../API/index.js"

//get all cats and map them
export default function Cats({token, cat, id, setCart, cart, breed}) {
    // const { id, name, imgurl, age, sex, color, description, breed, price } = cat;
    const [cats, setCats] = useState([]);
    const [breeds, setBreeds] = useState([])
    const [selectedBreed, setSelectedBreed] = useState('all')
    const [sortBy, setSortBy] = useState('ageIncrease');

    // const [errorMessage, setErrorMessage] = useState("")
    
    async function fetchData() {
        const cats = await fetchCats();
        // console.log(data)
        const breeds = cats.map(cat => cat.breed);
        const uniqueBreeds = [...new Set(breeds)];
        setBreeds(uniqueBreeds);
        setCats(cats);
    }
    console.log(breeds)

    async function handleClick(id, token) {
        // console.log("id", id)
        const Cat = await fetchCatById(id, token)
        // console.log(Cat)
        // console.log(cart)
        const catIds = cart.map(cat => cat.id)
        if (token) {
            // console.log(catIds)
            if (catIds.includes(Cat.id) === false) {
                try {
                    setCart([...cart, Cat])
                    let cartString = JSON.stringify(cart)
                    localStorage.setItem('cart', cartString)
                    // console.log(cart)
                } catch(err) {
                    console.error(err)
                }
            } else {
                console.log("You already added this cat to your cart")
            }
                
        } else {
            console.log("You must be logged in to add to cart")
            // setErrorMessage("You must be logged in to add to cart")
        }
    }
    
    useEffect(() => {
        fetchData()
    }, []) 

    function selectBreed(e) {
        setSelectedBreed(e.target.value)
    }

    function selectSortBy(e) {
        setSortBy(e.target.value);
    }

    function sortByAgeIncreasing() {
        filteredCats.sort((a, b) => {
              return a.age - b.age
        })
    }
    
    function sortByAgeDecreasing() {
        filteredCats.sort((a, b) => {
              return b.age - a.age
        })
    }
    
    let filteredCats = cats
    if (selectedBreed !== 'all') {
        filteredCats = cats.filter(cat => cat.breed === selectedBreed)
    } 
    if (sortBy === 'ageIncrease') {
        sortByAgeIncreasing()
    } else if (sortBy === 'ageDecrease') {
        sortByAgeDecreasing()
    }

    

    // console.log(cart)
    if (token) {
        return (
            <>
                <h1>CATS IN NEED OF HOMES</h1>
                <select onChange={selectBreed}>
                    <option value="all">All</option>
                    {breeds.map(breed => (
                        <option value={breed} key={breed}>{breed}</option>
                    ))}
                </select>
                <h3>Sort By</h3>
                <select value={sortBy} onChange={selectSortBy}>
                    <option value="ageIncrease">Youngest to Oldest</option>
                    <option value="ageDecrease">Oldest to Youngest</option>
                </select>
                <main>
                    {
                        filteredCats.map((cat => (
                        <div className='cat' key={cat.id}>
                            <CatCard
                                cat={cat}
                                token={token}
                                fetchData={fetchData}
                            />
                            <button className="addToCartButton" onClick={() => handleClick(cat.id, token)}>Add to Cart</button>
                            </div>
                        )))
                    }
                </main>
            </>
        )
    } else {
        return (
            <>
                <h1>CATS IN NEED OF HOMES</h1>
                <select onChange={selectBreed}>
                    <option value="all">All</option>
                    {breeds.map(breed => (
                        <option value={breed} key={breed}>{breed}</option>
                    ))}
                </select>
                <main>
                    {
                        filteredCats.map((cat) => (
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