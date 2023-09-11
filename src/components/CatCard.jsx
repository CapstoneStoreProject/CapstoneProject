import {fetchCats} from '../API'

export default function CatCard({ cat, fetchCats }) {
    const { id, name, imgurl, age, sex, color, description, breed, price } = cat;
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
                    <button>Add To Cart</button>
                 
                    
                </p>
            </div>
        </>
    )
}