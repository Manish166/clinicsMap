import React from 'react'
import UberMapBox from "../containers/Mapbox"
// import CheckBoxFilter from '../component/CheckBoxFilter'
import RadioFilter from '../component/RadioFilter'
import Navbar from "./Navbar"
import Footer from "./Footer"
import {connect} from 'react-redux'

class App extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Navbar/>
                <div className='row'>
                    <div className="col-sm-2" style={{"height" : "88vh"}}>
                        <RadioFilter/>
                    </div>
                    <div className="col-sm-10">
                        <UberMapBox/>
                    </div>
                </div>
                <Footer/>
            </React.Fragment>
        )
    }   
}

const mapStateToProps=(state)=>{
    return {
        filter : state.filter
    }
}

export default connect(mapStateToProps, null)(App)