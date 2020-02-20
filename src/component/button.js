import React from 'react'

const Button=(props)=>{
    return (
        <div>
            <button className="btn btn-primary" id="allClinisButton" onClick={props.onClick}>{props.name}</button>
        </div>
    ) 
}
export default Button;