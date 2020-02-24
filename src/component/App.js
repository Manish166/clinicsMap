import React from 'react'
import MapContainer from '../containers/mapContainer'
import Filter from '../component/filter'
import Navbar from "../component/navbar"
import Footer from "../component/footer"

const App = ()=>{
    return(
        <React.Fragment>
            <Navbar/>
            <div className='row'>
                <div className="col-sm-2">
                    <Filter/>
                </div>
                <div className="col-sm-10">
                    <MapContainer/>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default App