import React, { Component } from 'react'
import UberMapGL, {Source, Layer} from 'react-map-gl';
import {connect} from 'react-redux'
import Popup from './Popup'
import clinics from "../data/clinics2.json"
import medical from '../data/mclinics.json'
import dental from "../data/dclinics.json"
import {clusterLayer, clusterCountLayer, unclusteredPointLayer} from './Layers';
const MAPBOX_TOKEN = 'pk.eyJ1IjoibWFuaXNoMTY2IiwiYSI6ImNrNzIyeTVlcTBieHIzZW81bG5xczZ3dXQifQ.MLN_1SvNh2Be3t45U0l1VQ';

class UberMapBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                latitude: 1.3521,
                longitude: 103.8198,
                zoom: 9,
                bearing: 0,
                pitch: 0
            },
            popupState : null
        };
        this.sourceRef = React.createRef();
        this.onClick = this.onClick.bind(this)
        this.onViewportChange = this.onViewportChange.bind(this)
        this.onPopChange = this.onPopChange.bind(this)
        this.renderPopup = this.renderPopup.bind(this)
        this.renderSource = this.renderSource.bind(this)
    }

    onViewportChange(viewport){ 
        this.setState({viewport})
    };
    
    onPopChange(info){ 
        this.setState({popupState : info})
    };

    onClick(event) {
        const feature = event.features[0];
        const mapboxSource = this.sourceRef.current.getSource();
        if (feature.layer.id =="clusters"){
            mapboxSource.getClusterExpansionZoom(feature.properties.cluster_id, (err, zoom) => {
                if (err) {
                  return;
                }
                this.onViewportChange({
                  ...this.state.viewport,
                  longitude: feature.geometry.coordinates[0],
                  latitude: feature.geometry.coordinates[1],
                  zoom,
                  transitionDuration: 500
                })
            })
        }
        if (feature.layer.id =="unclustered-point"){
            const info ={
                name : feature.properties.name,
                formatted_address : feature.properties.formatted_address,
                poplng: feature.geometry.coordinates[0],
                poplat : feature.geometry.coordinates[1],
            }
            this.onPopChange(info)
        }
    };

    renderPopup(){
        if (this.state.popupState !== null){
            const name=this.state.popupState.name + this.state.popupState.formatted_address
            return(
                <Popup 
                    longitude={this.state.popupState.poplng} 
                    latitude={this.state.popupState.poplat} 
                    name={name}
                    tipSize= {5}
                    anchor= {top}
                    closeOnClick={false}
                    onClose={() => this.setState({popupState : null})}
                />
            )
        }
    }
    renderSource(){
        const choice = this.props.choice
        let mapping=null
        if (choice==="allClinics"){
            mapping=clinics
        }
        if (choice==="generalMedical"){
            mapping=medical
        }
        if (choice==="generalDental"){
            mapping=dental
        }
        return(
            <Source 
                type="geojson" 
                data={mapping}
                    cluster={true}
                    clusterMaxZoom={14}
                    clusterRadius={50}
                    ref={this.sourceRef}>
                        <Layer {...clusterLayer}/>
                        <Layer {...clusterCountLayer} />
                        <Layer {...unclusteredPointLayer} />
                </Source>
            
        )
    }

    render() {
        return (
            <UberMapGL
                {...this.state.viewport}
                width="100%"
                height="90vh"
                mapStyle="mapbox://styles/mapbox/streets-v11"
                onViewportChange={viewport => this.setState({viewport})}
                mapboxApiAccessToken={MAPBOX_TOKEN}
                interactiveLayerIds={[clusterLayer.id, unclusteredPointLayer.id]}
                onClick={this.onClick}
            >
                {this.renderSource()}
                {this.renderPopup()}
            </UberMapGL>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        choice : state.choice
    }
}

export default connect(mapStateToProps, null)(UberMapBox)