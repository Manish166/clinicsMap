import React from 'react'
import UberMapBox from "../containers/mapbox"
import Filter from '../component/filter'
import Navbar from "../component/navbar"
import Footer from "../component/footer"

const App = ()=>{
    return(
        <React.Fragment>
            <Navbar/>
            <div className='row'>
                <div className="col-sm-2" style={{"height" : "88vh"}}>
                    <Filter/>
                </div>
                <div className="col-sm-10">
                    <UberMapBox/>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default App