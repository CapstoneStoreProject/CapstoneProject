import { useNavigate } from 'react-router-dom'
import { deleteCatById } from '../API'

export default function CheckoutPage({token, cart, setCart}) {
    console.log(cart)
    const navigate = useNavigate()
    async function handleClick() {
        for (let i = 0; i < cart.length; i++) {
            await deleteCatById(cart[i].id)
        }
        
        setCart('')
        //how do I delete them from the main cats array?
        
        navigate('/')
    }
    return (
        <>
            <h1>Checkout</h1>
            <p>optional donation form</p>
            <p>choose pickup or delivery</p>
            <p>delivery of cat flat rate (stretch goal price based on milage)</p>
            <p>pick up cat for free</p>
            <button onClick={() => handleClick()}>Checkout</button>
        </>
    )
}