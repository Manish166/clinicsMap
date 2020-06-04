import React from 'react'
import Navigation from '../component/Navigation'
import ClinicForm from '../component/ClinicForm'
import Map from '../component/Map'
import AutoComplete from '../component/AutoComplete'
import findClincAction from '../actions/index'
import { Container, Row, Col } from 'react-bootstrap'

const AddClinicToPanel=()=>{
    const findClinic=(clinic)=>{
        //createAction to call db and fetch clinic and show it on map
        //else show error and move to add new clinic route

    }
     const addClinicToPanel=()=>{
         //change the status of clinic to be in panel
         //send call to db to change status
         //show confirmation

     }
    return(
        <Container fluid>
            <Row>
                <Col lg={3}>
                    {/* <ClinicForm/> */}
                    <AutoComplete
                        suggestions={['White', 'Black', 'Green', 'Blue', 'Yellow', 'Red']}
                    />
                </Col>
                <Col lg={9}>
                    <Map/>
                </Col>
            </Row>
        </Container>
    )
}

export default AddClinicToPanel
