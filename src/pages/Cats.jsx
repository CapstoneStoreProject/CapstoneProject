// import { useState, useEffect } from 'react';
// import CatCard from "../components/CatCard";
// import { fetchCatById, fetchCats } from "../API/index.js"

// //get all cats and map them
// export default function Cats({token, id, cat, setCart, cart}) {
//     // const { name, imgurl, age, sex, color, description, breed, neutered, price } = cat;

//     const [cats, setCats] = useState([]);
//     const [breeds, setBreeds] = useState([])
//     const [selectedBreed, setSelectedBreed] = useState('all')
//     const [sexes, setSex] = useState([])
//     const [selectedSex, setSelectedSex] = useState('all')
//     const [sortBy, setSortBy] = useState('ageIncrease');
//     const [filterCats, setFilterCats] = useState([])
    
//     async function fetchData() {
//         const data = await fetchCats();
//         setFilterCats(data)
//         setCats(data);
//     }
//     async function fetchBreeds() {
//         const data = await fetchCats();
//         // console.log(data)
//         const breeds = data.map(cat => cat.breed);
//         const uniqueBreeds = [...new Set(breeds)];
//         setBreeds(uniqueBreeds);
//         setCats(data);
        
//     }
//     async function fetchSex() {
//         const data = await fetchCats();
//         // console.log(data)
//         const sexes = data.map(cat => cat.sex);
//         const uniqueSexes= [...new Set(sexes)];
//         setSex(uniqueSexes);
//         setCats(data);
//     }
//     // console.log(breeds)

//     async function handleClick(id, token, e) {
//         // console.log("id", id)
//         e.preventDefault()
//         const Cat = await fetchCatById(id, token)
//         // console.log(Cat)
//         // console.log(cart)
//         const catIds = cart.map(cat => cat.id)
//         if (token) {
//             // console.log(catIds)
//             if (catIds.includes(Cat.id) === false) {
//                 try {
//                     setCart([...cart, Cat])
//                     let cartString = JSON.stringify(cart)
//                     localStorage.setItem('cart', cartString)
//                     // console.log(cart)
//                 } catch(err) {
//                     console.error(err)
//                 }
//             } else {
//                 console.log("You already added this cat to your cart")
//                 // setErrorMessage("You already added this cat to your cart")
//                 alert("You already added this cat to your cart")
//             }
                
//         } else {
//             console.log("You must be logged in to add to cart")
//             // setErrorMessage("You must be logged in to add to cart")
            
//         }
//     }
    
//     useEffect(() => {
//         fetchData()
//         fetchBreeds()
//         fetchSex()
//     }, []) 

//     // function handleSubmit(e) {
//     //     e.preventDefault()
//     //     console.log(cats)
//     //     const search = e.target.value
//     //     const filterCats = cats.filter((cat) => {
//     //       return cat.name.toLowerCase().includes(search.toLowerCase())
//     //     })
//     //     setFilterCats(filterCats)
//     // }

//     function selectBreed(e) {
//         setSelectedBreed(e.target.value)
//     }

//     function selectSex(e) {
//         setSelectedSex(e.target.value)
//     }
//     function selectSortBy(e) {
//         setSortBy(e.target.value);
//     }

//     function sortByAgeIncreasing() {
//         filteredCats.sort((a, b) => {
//               return a.age - b.age
//         })
//     }
    
//     function sortByAgeDecreasing() {
//         filteredCats.sort((a, b) => {
//               return b.age - a.age
//         })
//     }

//     function sortByAlphabetical() {
//         let filteredCats = cats
//         filteredCats.sort((a, b) => {
//             return (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0
//         })  
//     }
//     function sortByReverseAlphabetical() {
//         let filteredCats = cats
//         filteredCats.sort((a, b) => {
//             return (a.name > b.name) ? -1 : (a.name < b.name) ? 1 : 0
//         })  
//     }
//     let filteredCats = cats
//     function handleSubmit(e) {
//         e.preventDefault()
//         console.log(cats)
//         const search = e.target.value
//         // const filteredCats = [...cats]
//         const filterCats = [...cats].filter((cat) => {
//           const name = cat.name ? cat.name : ''
//           console.log(name)
//           return name.toString().toLowerCase().includes(search.toLowerCase())
//         })
//         setFilterCats(filterCats)
//     }
//     if (selectedBreed !== 'all') {
//         filteredCats = filteredCats.filter(cat => cat.breed === selectedBreed)
//     } 
//     if (selectedSex !== 'all') {
//         filteredCats = filteredCats.filter(cat => cat.sex === selectedSex)
//     } 
//     if (sortBy === 'ageIncrease') {
//         sortByAgeIncreasing()
//     } else if (sortBy === 'ageDecrease') {
//         sortByAgeDecreasing()
//     } else if (sortBy === 'alphabetical') {
//         sortByAlphabetical()
//     } else if (sortBy === 'reverseAlphabetical') {
//         sortByReverseAlphabetical()
//     } 
    
//     // console.log(cart)
//     if (token) {
//         return (
//             <>
//                 <h1>CATS IN NEED OF HOMES</h1>
                
//                 <form onSubmit={handleSubmit}>
//                     <label htmlFor="search">Search</label>
//                     <input onChange={handleSubmit} type="text" id="search" />
//                 </form>
          
//                 <p>Breeds:  
//                     <select onChange={selectBreed}>
//                         <option value="all">All</option>
//                         {breeds.map(breed => (
//                             <option value={breed} key={breed}>{breed}</option>
//                         ))}
//                     </select>
//                 </p>
//                 <p>Sex:  
//                     <select onChange={selectSex}>
//                         <option value="all">All</option>
//                         {sexes.map(sex => (
//                             <option value={sex} key={sex}>{sex}</option>
//                         ))}
//                     </select>
//                 </p>
//                 <p>View By Order:
//                     <select value={sortBy} onChange={selectSortBy}>
//                         <option value="ageIncrease">Youngest to Oldest</option>
//                         <option value="ageDecrease">Oldest to Youngest</option>
//                         <option value="alphabetical">Alphabetical</option>
//                         <option value="reverseAlphabetical">Reverse Alphabetical</option>

//                     </select>
//                 </p>
//                 <main>
//                     {
//                         filteredCats.map((cat => (
//                         <div className='cat' key={cat.id}>
//                             <CatCard
//                                 cat={cat}
//                                 token={token}
//                                 fetchData={fetchData}
//                             />
//                             <button className="addToCartButton" onClick={(e) => handleClick(cat.id, token, e)}>Add to Cart</button>
//                             </div>
//                         )))     
//                     }
//                 </main>
//             </>
//         )
//     } else {
//         return (
//             <>
//                 <h1>CATS IN NEED OF HOMES</h1>
//                 <p>Breeds:  
//                     <select onChange={selectBreed}>
//                         <option value="all">All</option>
//                         {breeds.map(breed => (
//                             <option value={breed} key={breed}>{breed}</option>
//                         ))}
//                     </select>
//                 </p>
//                 <p>Sex:  
//                     <select onChange={selectSex}>
//                         <option value="all">All</option>
//                         {sexes.map(sex => (
//                             <option value={sex} key={sex}>{sex}</option>
//                         ))}
//                     </select>
//                 </p>
//                 <p>View By Order:
//                     <select value={sortBy} onChange={selectSortBy}>
//                         <option value="ageIncrease">Youngest to Oldest</option>
//                         <option value="ageDecrease">Oldest to Youngest</option>
//                         <option value="alphabetical">Alphabetical</option>
//                         <option value="reverseAlphabetical">Reverse Alphabetical</option>
//                     </select>
//                 </p>
//                 <main>
//                     {
//                         filteredCats.map((cat) => (
//                         <div className='cat' key={cat.id}>
//                             <CatCard
//                                 cat={cat}
//                                 token={token}
//                                 fetchData={fetchData}
//                             />
//                             <p>You must login to select a cat to adopt</p>
//                             </div>
//                         ))
//                     }
//                 </main>
//             </>
//         )
//     }
    
    
// }
// 
import { useState, useEffect } from 'react';
import CatCard from "../components/CatCard";
import { fetchCatById, fetchCats } from "../API/index.js"
//get all cats and map them
export default function Cats({token, id, cat, setCart, cart}) {
    // const { name, imgurl, age, sex, color, description, breed, neutered, price } = cat;
    const [cats, setCats] = useState([]);
    const [breeds, setBreeds] = useState([])
    const [selectedBreed, setSelectedBreed] = useState('all')
    const [sexes, setSex] = useState([])
    const [selectedSex, setSelectedSex] = useState('all')
    const [sortBy, setSortBy] = useState('ageIncrease');
    // const [filterCats, setFilterCats] = useState([])
    let filteredCats = [...cats]
    async function fetchData() {
        const data = await fetchCats();
        // filteredCats = data
        setCats(data);
    }
    async function fetchBreeds() {
        const data = await fetchCats();
        // console.log(data)
        const breeds = data.map(cat => cat.breed);
        const uniqueBreeds = [...new Set(breeds)];
        setBreeds(uniqueBreeds);
        // setCats(data);
        // filteredCats = data
    }
    async function fetchSex() {
        const data = await fetchCats();
        // console.log(data)
        const sexes = data.map(cat => cat.sex);
        const uniqueSexes= [...new Set(sexes)];
        setSex(uniqueSexes);
        // setCats(data);
        // filteredCats = data
    }
    // console.log(breeds)
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
        fetchBreeds()
        fetchSex()
    }, [])
    // function handleSubmit(e) {
    //     e.preventDefault()
    //     console.log(cats)
    //     const search = e.target.value
    //     filteredCats = cats.filter((cat) => {
    //       return cat.name.toLowerCase().includes(search.toLowerCase())
    //     })
    // }
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
    function handleSubmit(e) {
        e.preventDefault()
        console.log(cats)
        const search = e.target.value
        filteredCats = cats.filter((cat) => {
          const name = cat.name ? cat.name : ''
          console.log(name)
          return name.toString().toLowerCase().includes(search.toLowerCase())
        })
    }
    if (selectedBreed !== 'all') {
        filteredCats = cats.filter(cat => cat.breed === selectedBreed)
    }
    if (selectedSex !== 'all') {
        filteredCats = cats.filter(cat => cat.sex === selectedSex)
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
    // console.log(cart)
    if (token) {
        return (
            <>
                <h1>CATS IN NEED OF HOMES</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="search">Search</label>
                    <input onChange={handleSubmit} type="text" id="search" />
                </form>
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
                        filteredCats.map((cat => (
                        <div className='cat' key={cat.id}>
                            <CatCard
                                cat={cat}
                                token={token}
                                fetchData={fetchData}
                            />
                            <button className="addToCartButton" onClick={(e) => handleClick(cat.id, token, e)}>Add to Cart</button>
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
                        <option value="alphabetical">Alphabetical</option>
                        <option value="reverseAlphabetical">Reverse Alphabetical</option>
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