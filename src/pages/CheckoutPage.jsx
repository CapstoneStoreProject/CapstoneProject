import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteCatById } from '../API'
import AddressForm from '../components/AddressForm.jsx'

export default function CheckoutPage({token, cart, setCart}) {
    const [deliver, setDeliver] = useState(false)
    console.log(cart)
    const navigate = useNavigate()
    async function handleClick() {
        for (let i = 0; i < cart.length; i++) {
            await deleteCatById(cart[i].id, token)
        }
        setCart([])
        navigate('/')
    }
    function delivery() {
        setDeliver(true)
    }
    function pickup() {
        setDeliver(false)
    }
    return (
        <>
        <div className='checkoutpage'>
            <h1>Checkout</h1>
            <h3>Click on the Donate button below to help us support our cats while we search for their forever homes.</h3>
            <br></br>
            <form action="https://www.paypal.com/donate" method="post" target="_top">
                <input type="hidden" name="business" value="S4SKMGQFP3PGG" />
                <input type="hidden" name="no_recurring" value="0" />
                <input type="hidden" name="item_name" value="Optional donations accepted to help us support our cats while we search for their forever homes." />
                <input type="hidden" name="currency_code" value="USD" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form>
            <br></br>
            <p>Choose pickup or delivery:</p>
           
            <div className="form-check">
                <input onClick={pickup} className="radio" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Pick Up (Free)
                </label>
                </div>
                <div className="form-check">
                <input onClick={delivery} className="radio" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Delivery
                </label>
            </div>
            { deliver ? <AddressForm /> : <p>Pick up location.</p>}
    
            {/* <p>Delivery of cat flat rate (stretch goal price based on milage--requires me to have a location)</p> */}
            {/* <p>pick up cat for free</p> */}
            <button className="btn btn-success checkout" onClick={() => handleClick()}>Checkout</button>
            </div>
        </>
    )
}