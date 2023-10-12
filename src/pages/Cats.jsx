import { useState, useEffect } from 'react';
import CatCard from "../components/CatCard";
import { fetchCatById, fetchCats } from "../API/index.js"
import SearchBar from '../components/SearchBar';
//get all cats and map them
export default function Cats({token, id, cat, setCart, cart}) {
    const [filteredCats, setFilteredCats] = useState([])

    const [cats, setCats] = useState([]);
    const [breeds, setBreeds] = useState([])
    const [selectedBreed, setSelectedBreed] = useState('all')
    const [sexes, setSex] = useState([])
    const [selectedSex, setSelectedSex] = useState('all')
    const [sortBy, setSortBy] = useState('ageIncrease');
   
    async function fetchData() {
        const data = await fetchCats();
        setCats(data);
        const breeds = data.map(cat => cat.breed);
        const uniqueBreeds = [...new Set(breeds)];
        const sexes = data.map(cat => cat.sex);
        const uniqueSexes= [...new Set(sexes)];
        setSex(uniqueSexes);
        setBreeds(uniqueBreeds);
    }

    async function handleClick(id, token, e) {
        // console.log("id", id)
        e.preventDefault()
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
                alert("You already added this cat to your cart")
            }
                
        } else {
            console.log("You must be logged in to add to cart")            
        }
    }
    
    useEffect(() => {
        fetchData()
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

    function sortByAlphabetical() {
        filteredCats.sort((a, b) => {
            return (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0
        })  
    }
    function sortByReverseAlphabetical() {
        filteredCats.sort((a, b) => {
            return (a.name > b.name) ? -1 : (a.name < b.name) ? 1 : 0
        })  
    }
    function filterCats(cat) {
        if (selectedBreed === 'all' && selectedSex === 'all') {
            return true
        } 
        if (selectedBreed !== 'all' && selectedSex !== 'all') {
            return cat.breed === selectedBreed && cat.sex === selectedSex
        } 
        if (selectedSex !== 'all') {
            return cat.sex === selectedSex
        } 
        if (selectedBreed !== 'all') {
            return cat.breed === selectedBreed
        } 
    }
    if (sortBy === 'ageIncrease') {
        sortByAgeIncreasing()
    } else if (sortBy === 'ageDecrease') {
        sortByAgeDecreasing()
    } else if (sortBy === 'alphabetical') {
        sortByAlphabetical()
    } else if (sortBy === 'reverseAlphabetical') {
        sortByReverseAlphabetical()
    } 
    
        return (
            <>
            <div className='catspage'>
                <h1>CATS IN NEED OF HOMES</h1>
                
                <SearchBar filteredCats={filteredCats} setFilteredCats={setFilteredCats} />
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
                        <option value="alphabetical">Alphabetical</option>
                        <option value="reverseAlphabetical">Reverse Alphabetical</option>

                    </select>
                </p>
                <main>
                    {
                        filteredCats.filter(filterCats).map((cat => (
                        <div className='cat' key={cat.id}>
                            <CatCard
                                cat={cat}
                                token={token}
                                fetchData={fetchData}
                            />
                            { token ? <button className="addToCartButton" onClick={(e) => handleClick(cat.id, token, e)}>Add to Cart</button> : <p>You must login to select a cat to adopt</p>}
                            </div>
                        )))     
                    }
                </main>
                </div>
            </>
        )

}
