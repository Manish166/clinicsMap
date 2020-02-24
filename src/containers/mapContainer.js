import React, { Component } from 'react'
import Map from '../component/map'
import allClincsData from '../data/allClinics.json'
import dentalClinicsData from '../data/dentalClinics.json'
import medicalClinicsData from '../data/medicalClinics.json'
import {connect} from 'react-redux'

class MapContainer extends Component {
    constructor(props){
        super(props)
        this.initMap = this.initMap.bind(this)
        this.createAllMarkers = this.createAllMarkers.bind(this)
        window.initMap = this.initMap.bind(this);
        this.state = {
                mapObj : '',
                clinicsMarkers : [],
                medicalMarkers :[],
                dentalMarkers : []
        }
    }
    componentDidMount(){
        const script = document.createElement("script");
        script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAO6l-w00hJYsdJVstRd88sluQ2eDV6DjE&libraries=places,visualization&callback=initMap";
        script.async = true
        script.defer = true
        window.document.body.appendChild(script);
    }

    initMap(){
        this.setState({mapObj : new window.google.maps.Map(document.getElementById('map'), {
            center: {lat: 1.3521, lng: 103.8198},
            zoom: 12,
            mapTypeId: 'satellite'
          })
        });
        this.createAllMarkers()
    }

    createAllMarkers(){
        var allClincsMarkers=[]
        var medicalClinicsMarkers = []
        var dentalClincsMarkers=[]
        
        for (var i=0; i<allClincsData.length; i++){  
            var marker1 = new window.google.maps.Marker({
                position:{lat : allClincsData[i].lat,lng: allClincsData[i].lng}
            })
            allClincsMarkers.push(marker1)
        }
        
        for (var j=0; j<medicalClinicsData.length; j++){  
            var marker2 = new window.google.maps.Marker({
                position:{lat : medicalClinicsData[j].lat,lng: medicalClinicsData[j].lng}
            })
            medicalClinicsMarkers.push(marker2)
        }

        for (var k=0; k<dentalClinicsData.length; k++){  
            var marker3 = new window.google.maps.Marker({
                position:{lat : dentalClinicsData[k].lat,lng: dentalClinicsData[k].lng}
            })
            dentalClincsMarkers.push(marker3)
        }
        this.setState({clinicsMarkers: allClincsMarkers})
        this.setState({medicalMarkers: medicalClinicsMarkers})
        this.setState({dentalMarkers : dentalClincsMarkers})
    }

    // markAllClinics(){
    //     var circleColor = '#FF0000'
    //     for (var i=0; i<mapData.length; i++){  
    //         if (mapData[i].rolled_in_clinics){
    //             circleColor = 'blue'
    //         } else{
    //             circleColor = 'red'
    //         }
    //         new google.maps.Circle({
    //             strokeColor: circleColor,
    //             strokeOpacity: 1,
    //             strokeWeight: 2,
    //             fillColor: circleColor,
    //             fillOpacity: 0.5,
    //             map: this.state.mapObj,
    //             center: {lat : mapData[i].lat,lng: mapData[i].lng},
    //             radius: 300
    //         })
    //     } 
    // }

    markAllClinics(instruction){
        if (instruction){
            this.state.clinicsMarkers.forEach(marker => {
                marker.setMap(this.state.mapObj)
            });
        }else{
            this.state.clinicsMarkers.forEach(marker => {
                marker.setMap(null)
            });
        }
    }

    markMedicalClinics(instruction){
        if (instruction){
            this.state.medicalMarkers.forEach(marker => {
                marker.setMap(this.state.mapObj)
            });
        }else{
            this.state.medicalMarkers.forEach(marker => {
                marker.setMap(null)
            });
        }
    }

    markDentalClinics(instruction){
        if (instruction){
            this.state.dentalMarkers.forEach(marker => {
                marker.setMap(this.state.mapObj)
            });
        }else{
            this.state.dentalMarkers.forEach(marker => {
                marker.setMap(null)
            });
        }
    }
        //     for (var i=0; i<mapData.length; i++){  
        //         if (mapData[i].rolled_in_clinics) {
        //             new window.google.maps.Marker({
        //                 position:{lat : mapData[i].lat,lng: mapData[i].lng}, 
        //                 // map: this.state.mapObj
        //                 }).setMap(this.state.mapObj);
        //             new google.maps.Circle({
        //                 strokeColor: circleColor,
        //                 strokeOpacity: 1,
        //                 strokeWeight: 2,
        //                 fillColor: circleColor,
        //                 fillOpacity: 0.5,
        //                 map: this.state.mapObj,
        //                 center: {lat : mapData[i].lat,lng: mapData[i].lng},
        //                 radius: 300
        //             })
        //         } 
        //     } 
        // }else{
        //     for (var i=0; i<mapData.length; i++){ 
        //         console.log("else", instruction) 
        //         if (mapData[i].rolled_in_clinics) {     
        //             new window.google.maps.Marker({
        //                 position:{lat : mapData[i].lat,lng: mapData[i].lng}, 
        //                 }).setMap(null);
        //         }
        //     }
        // }

    render() {
        if (this.props.filter){
            let filter=this.props.filter
            if (filter.allClinics){
                this.markAllClinics(filter.allClinics)
            }else{
                this.markAllClinics(filter.allClinics)
            }
            if (filter.generalMedical){
                this.markMedicalClinics(filter.generalMedical)
            }else{
                this.markMedicalClinics(filter.generalMedical)
            }
            if (filter.generalDental){
                this.markDentalClinics(filter.generalDental)
            }else{
                this.markDentalClinics(filter.generalDental)
            }

        }
        return (
            <div>
                <Map/>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        filter : state.filter
    }
}

export default connect(mapStateToProps, null)(MapContainer)


