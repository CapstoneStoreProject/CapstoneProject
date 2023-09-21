import { useState, useEffect } from 'react';
import CatCard from "../components/CatCard";
import { fetchCatById, fetchCats } from "../API/index.js"

//get all cats and map them
export default function Cats({token, cat, id, setCart, cart}) {
    // const { id, name, imgurl, age, sex, color, description, breed, price } = cat;
    const [cats, setCats] = useState([]);
    const [breeds, setBreeds] = useState([])
    const [selectedBreed, setSelectedBreed] = useState('all')
    const [sexes, setSex] = useState([])
    const [selectedSex, setSelectedSex] = useState('all')
    const [sortBy, setSortBy] = useState('ageIncrease');

    const [errorMessage, setErrorMessage] = useState("")
    
    async function fetchData() {
        const cats = await fetchCats();
        // console.log(data)
        const breeds = cats.map(cat => cat.breed);
        const uniqueBreeds = [...new Set(breeds)];
        setBreeds(uniqueBreeds);
        setCats(cats);
    }
    async function fetchSex() {
        const cats = await fetchCats();
        // console.log(data)
        const sexes = cats.map(cat => cat.sex);
        const uniqueSexes= [...new Set(sexes)];
        setSex(uniqueSexes);
        setCats(cats);
    }
    // console.log(breeds)

    async function handleClick(id, token, e) {
        // console.log("id", id)
        e.preventDefault()
        const Cat = await fetchCatById(id, token)
        // console.log(Cat)
        console.log(cart)
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
                // setErrorMessage("You already added this cat to your cart")
                alert("You already added this cat to your cart")
            }
                
        } else {
            console.log("You must be logged in to add to cart")
            // setErrorMessage("You must be logged in to add to cart")
            
        }
    }
    
    useEffect(() => {
        fetchData()
        fetchSex()
    }, []) 

    function selectBreed(e) {
        setSelectedBreed(e.target.value)
    }

    function selectSex(e) {
        setSelectedSex(e.target.value)
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
        filteredCats = filteredCats.filter(cat => cat.breed === selectedBreed)
    } 
    if (selectedSex !== 'all') {
        filteredCats = filteredCats.filter(cat => cat.sex === selectedSex)
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
                <p>Breeds:  
                    <select onChange={selectBreed}>
                        <option value="all">All</option>
                        {breeds.map(breed => (
                            <option value={breed} key={breed}>{breed}</option>
                        ))}
                    </select>
                </p>
                <p>Sex:  
                    <select onChange={selectSex}>
                        <option value="all">All</option>
                        {sexes.map(sex => (
                            <option value={sex} key={sex}>{sex}</option>
                        ))}
                    </select>
                </p>
                <p>View By Order:
                    <select value={sortBy} onChange={selectSortBy}>
                        <option value="ageIncrease">Youngest to Oldest</option>
                        <option value="ageDecrease">Oldest to Youngest</option>
                    </select>
                </p>
                <main>
                    {
                        filteredCats.map((cat => (
                        <div className='cat' key={cat.id}>
                            <CatCard
                                cat={cat}
                                token={token}
                                fetchData={fetchData}
                            />
                            <button className="addToCartButton" onClick={(e) => {setErrorMessage(''); handleClick(cat.id, token, e)}}>Add to Cart</button>
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
                <p>Breeds:  
                    <select onChange={selectBreed}>
                        <option value="all">All</option>
                        {breeds.map(breed => (
                            <option value={breed} key={breed}>{breed}</option>
                        ))}
                    </select>
                </p>
                <p>Sex:  
                    <select onChange={selectSex}>
                        <option value="all">All</option>
                        {sexes.map(sex => (
                            <option value={sex} key={sex}>{sex}</option>
                        ))}
                    </select>
                </p>
                <p>View By Order:
                    <select value={sortBy} onChange={selectSortBy}>
                        <option value="ageIncrease">Youngest to Oldest</option>
                        <option value="ageDecrease">Oldest to Youngest</option>
                    </select>
                </p>
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