import { useState, useEffect } from 'react';
import CatCard from "../components/CatCard";
import { fetchCats } from "../API/index.js"

//get all cats and map them
export default function Cats() {
    const [cats, setCats] = useState([]);
    async function fetchData() {
        const data = await fetchCats()
        setCats(data)
        console.log(cats)
    }
    // useEffect(() => {
    //     fetchData()
    // }, []) 
    return (
        <>
            <h1>CATS IN NEED OF HOMES</h1>
            <main>
                {
                    cats.map((cat) => (
                        <CatCard
                            key={cat.id}
                            cat={cat}
                            fetchData={fetchData}
                        />
                    ))
                }
            </main>
        </>
    )
}