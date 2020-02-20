import React from 'react'
import MapContainer from '../containers/mapContainer'
import Filter from '../component/filter'

const App = ()=>{
    return(
        <React.Fragment>
            <Filter/>
            <MapContainer/>
        </React.Fragment>
        
    )
}

export default App