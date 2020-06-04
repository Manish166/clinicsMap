import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux'
import MapGL from 'react-map-gl';
import Markers from './Markers'
const MAPBOX_TOKEN = 'pk.eyJ1IjoibWFuaXNoMTY2IiwiYSI6ImNrNzIyeTVlcTBieHIzZW81bG5xczZ3dXQifQ.MLN_1SvNh2Be3t45U0l1VQ';


const Map = () => {
    const markerLocation = useSelector(state => state.markerLocation)
    const [viewport, setViewport] = useState({
      latitude: 1.3521,
      longitude: 103.8198,
      zoom: 11,
      bearing: 0,
      pitch: 0
    });

    useEffect(()=>{
      setViewport({
        latitude : markerLocation.lat,
        longitude : markerLocation.lng,
        zoom : 13
      })
    },[markerLocation])
  
    return (
      <div>
        <MapGL
          {...viewport}
          width="100%"
          height="90vh"
          mapStyle="mapbox://styles/mapbox/dark-v9"
          onViewportChange={nextViewport => setViewport(nextViewport)}
          mapboxApiAccessToken={MAPBOX_TOKEN}
        >
          {markerLocation ? <Markers markerLocation={markerLocation}/> : <div/>}
        {/* <Markers markerLocation={markerLocation}/> */}
        </MapGL>
        
      </div>
      
    );
  }

  export default Map