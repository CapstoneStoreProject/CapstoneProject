import { useState, useEffect } from "react"
import { fetchCats } from '..//API/index'
export default function SearchBar({setFilteredCats}) {
    // const [filteredCats, setFilteredCats] = useState([])
    const [cats, setCats] = useState([]);
    // const [names, setNames] = useState([])
    async function fetchData() {
        const data = await fetchCats();
        setCats(data)
        setFilteredCats(data)
    }
    useEffect(() => {
        fetchData()
    }, [])
    function handleSubmit(e) {
        e.preventDefault()
        const search = e.target.value
        const filteredCats = cats.filter((cat) => {
            const name = cat.name ? cat.name : ''
            return name.toLowerCase().includes(search.toLowerCase())
        })
        console.log(filteredCats)
        setFilteredCats(filteredCats)
      }
    return (
         <form onSubmit={handleSubmit}>
            <label htmlFor="search">Search</label>
            <input onChange={handleSubmit} type="text" id="search" />
        </form> 
    )
}