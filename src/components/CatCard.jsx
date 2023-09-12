import { useState } from 'react'
import { fetchCats} from '../API'

export default function CatCard({ token, cat, fetchCats }) {
    const { id, name, imgurl, age, sex, color, description, breed, price } = cat;
    // const cart = []
    // console.log(token)
    
    
        // console.log("cat", cat)
        // let cats = [...cart]
        // cats.push(cat)
        // setCart(cats) 
    
    return (
        <>
            <div className="CatCard" key={id}>
                <h2>{name}</h2>
                <img src={imgurl} width="200px"/>
                <p>
                    <b>Age:</b> {age}
                    <br></br>
                    <b>Color:</b> {color}
                    <br></br>
                    <b>Sex:</b> {sex}
                    <br></br>
                    <b>Description:</b> {description}
                    <br></br>
                    <b>Breed:</b> {breed}
                    <br></br>
                    <b>Price:</b> {price}
                    <br></br>
                    {/* <button className="addToCartButton" onClick={() => handleClick(id, token)}>Add to Cart</button> */}
                 
                    
                </p>
            </div>
        </>
    )
}