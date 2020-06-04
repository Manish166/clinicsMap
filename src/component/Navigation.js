import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Container, Navbar} from 'react-bootstrap'

const Navigation= ()=>{
    return(
        <Navbar expand="lg" variant="light" bg="light">
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
            <Link to="/updateClinic" className="nav-link">Update Clinic</Link>
        </Navbar>
    ) 
}

export default Navigation

