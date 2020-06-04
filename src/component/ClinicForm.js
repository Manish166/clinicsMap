import React, { Fragment, useState } from 'react'
import getAllClinics from '../actions/index'
import { useDispatch } from 'react-redux'
import {Form, Button} from 'react-bootstrap'

const ClinicForm = ()=>{
    const [clinicName, setClinicName] = useState('')
    const [clinicsAddress, setClinicsAddress] = useState('')
    const [pinCode, setPinCode] = useState('')

    const dispatch=useDispatch()

    const handleChange=(event)=>{
        ({[e.target.name]: e.target.value})
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        const clinic ={
            name : this.state.clinicName,
            address : this.state.clinicsAddress,
            pinCode : this.state.pinCode
        }
        dispatch({type : ''})
    }
    return(
        <Form>
            <Form.Group controlId="clinicName">
                <Form.Label>Clinic name</Form.Label>
                <Form.Control type="text" placeholder="Enter clinic name" 
                    onChange={event=>setClinicName(event.target.value)}/>
            </Form.Group>

            <Form.Group controlId="clinicAddress">
                <Form.Label>Clinic address</Form.Label>
                <Form.Control type="text" placeholder="Enter clinic address" 
                    onChange={event=>setClinicsAddress(event.target.value)}/>
            </Form.Group>
            <Form.Group controlId="zipCode">
                <Form.Label>ZipCode</Form.Label>
                <Form.Control type='text' placeholder='Enter zipcode' 
                    onChange={event=>setPinCode(event.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
            </Button>
            </Form>
    )
}

export default ClinicForm