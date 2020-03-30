import React, { Component } from 'react'
import {Source, Layer} from 'react-map-gl';
import {clusterLayer, clusterCountLayer, unclusteredPointLayer} from './layers';

export default class mapboxCluster extends Component {
    constructor(props){
        super(props)
        this.sourceRef = React.createRef();
        this.handleClickClusterLayer = this.handleClickClusterLayer.bind(this)
    }

    handleClickClusterLayer(){
        const feature = event.features[0];
        const clusterId = feature.properties.cluster_id;
        const mapboxSource = this._sourceRef.current.getSource();
        mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
            if (err) {
            return;
        }
      this._onViewportChange({
        ...this.state.viewport,
        longitude: feature.geometry.coordinates[0],
        latitude: feature.geometry.coordinates[1],
        zoom,
        transitionDuration: 500
      });
    });
  };

    render() {
        return (
            <Source 
                type="geojson"
                data={this.props.clinics}
                cluster={true}
                clusterMaxZoom={14}
                clusterRadius={50}
                ref={this.sourceRef}>
                    <Layer {...clusterLayer}/>
                    <Layer {...clusterCountLayer}/>
                    <Layer {...unclusteredPointLayer} onClick={this.handleClickClusterLayer}/>
            </Source>
        )
    }
}
