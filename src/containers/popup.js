import React, { Component } from 'react'
import {Popup} from 'react-map-gl';

const PopupComp=(props)=>{
    return(
        <Popup 
            longitude={props.longitude} 
            latitude={props.latitude}
            onClose={props.onClose}
            renderPopupState={props.renderPopupState}>
            <div>{props.name}</div>
        </Popup>
    )
}
export default PopupComp


 