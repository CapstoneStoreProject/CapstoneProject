import {fetchCats} from '../API'

export default function CatCard({ cat, fetchCats }) {
    const { id, name, imgurl, age, sex, color, description, breed, price } = cat;
    return (
        <>
            <div className="CatCard" key={id}>
                <p>{name}</p>
                <img src={imgurl} width="200px"/>
                <p>Age: {age}</p>
            </div>
        </>
    )
}