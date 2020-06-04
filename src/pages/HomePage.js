import React from 'react'
import UberMapBox from "../component/UberMapbox"
import {withRouter} from 'react-router-dom'
import {Navbar, Row, Col, Container} from 'react-bootstrap'
// import CheckBoxFilter from '../component/CheckBoxFilter'
import RadioFilter from '../component/RadioFilter'
import Navigation from "../component/Navigation"
import Footer from "../component/Footer"
import {connect} from 'react-redux'

class HomePage extends React.Component{
    render(){
        return(
            <Container fluid>
                <Row>
                    <Col lg={3}>
                        <RadioFilter/>
                    </Col>
                    <Col lg={9}>
                        <UberMapBox/>
                    </Col>
                </Row>
            </Container>
            
        )
    }   
}

const mapStateToProps=(state)=>{
    return {
        filter : state.filter
    }
}

export default withRouter(connect(mapStateToProps, null)(HomePage))