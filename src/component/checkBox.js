import React from 'react';

const Checkbox = (props)=>{
    return(
        <div>
            <label style={{"color": "white", "marginLeft": '1.5rem'}}>
                <input style={{"margin" : ".5rem"}}
                    type="checkbox"
                    label={props.name} 
                    id={props.id} 
                    onChange={props.onChange} 
                    checked={props.checked} 
                ></input>
                {props.name}
            </label> 
        </div> 
    )
}

export default Checkbox

