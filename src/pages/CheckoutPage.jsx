import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteCatById } from '../API'
import { Autocomplete, verify, AddressForm } from '@lob/react-address-autocomplete'
export default function CheckoutPage({token, cart, setCart}) {
    const [selectedAddress, setSelectedAddress] = useState({})
    const [verificationResult, setVerificationResult] = useState(null)
    console.log(cart)
    const navigate = useNavigate()
    async function handleClick() {
        for (let i = 0; i < cart.length; i++) {
            await deleteCatById(cart[i].id, token)
        }
        
        setCart([])
        
        navigate('/')
    }
    return (
        <>
           

            <h1>Checkout</h1>
            <h3>Click on the Donate button below to help us support our cats while we search for their forever homes.</h3>
            <form action="https://www.paypal.com/donate" method="post" target="_top">
                <input type="hidden" name="business" value="S4SKMGQFP3PGG" />
                <input type="hidden" name="no_recurring" value="0" />
                <input type="hidden" name="item_name" value="Optional donations accepted to help us support our cats while we search for their forever homes." />
                <input type="hidden" name="currency_code" value="USD" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form>
            
            <p>choose pickup or delivery</p>
            {/* <AddressForm
                apiKey="YOUR_API_KEY"
                onSelection={selected => setSelectedAddress(selected.value)}
            /> */}
            <p>delivery of cat flat rate (stretch goal price based on milage)</p>
            <p>pick up cat for free</p>
            <button onClick={() => handleClick()}>Checkout</button>
        </>
    )
}