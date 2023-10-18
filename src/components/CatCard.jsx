import { useState } from 'react'
import { fetchCats} from '../API'

export default function CatCard({ token, cat, fetchCats }) {
    const { id, name, imgurl, age, sex, color, description, breed, neutered, price } = cat;
    
    return (
        <>
            <div className="CatCard" key={id}>
                <h2>{name}</h2>
                <img src={imgurl} width="280px"/> 
                <p>
                    <b>Age:</b> {age} years old <br></br>
                    <b>Color:</b> {color} <br></br>
                    <b>Sex:</b> {sex} <br></br>    
                    <b>Description:</b> {description} <br></br>
                    <b>Breed:</b> {breed} <br></br>
                    <b>Neutered/Spayed:</b> {neutered ? "yes" : "no"} <br></br>
                    <b>Price:</b> {price} <br></br>
                    </p>
                </div>
            </>
        )
    
    }
    
