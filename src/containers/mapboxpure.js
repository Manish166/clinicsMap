import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl'
import './mapbox.css'
mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

export default class mapboxpure extends Component {
    constructor(props){
        super(props)
        this.mapRef = React.createRef()
    }
    componentDidMount() {
        var map = new mapboxgl.Map({
            container: this.mapRef.current, // container id
            style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
            center: {lat: 1.3521, lng: 103.8198}, // starting position [lng, lat]
            zoom: 9 // starting zoom
            });
    }
    render() {
        return (
            <div>
                <div ref={this.mapRef} className="mapContainer"/>
            </div>
        )
    }
}
