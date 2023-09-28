// import { useState } from 'react'
import {
    MDBRow,
    MDBCol,
    MDBInput,
    MDBCheckbox,
    MDBBtn
  } from 'mdb-react-ui-kit';
export default function AddressForm() {
    return (
        <>
            <p>Please input your address below.</p>
             <MDBRow className='mb-4'>
                <MDBCol>
                <MDBInput id='form6Example1' label='First name' />
                </MDBCol>
                <MDBCol>
                <MDBInput id='form6Example2' label='Last name' />
                </MDBCol>
            </MDBRow>

            <MDBInput wrapperClass='mb-4' id='form6Example4' label='Address' />
            <MDBInput wrapperClass='mb-4' type='email' id='form6Example5' label='Email' />
            <MDBInput wrapperClass='mb-4' type='tel' id='form6Example6' label='Phone' />

            <MDBInput wrapperClass='mb-4' textarea id='form6Example7' rows={4} label='Additional information' />

      
        </>
    )
}