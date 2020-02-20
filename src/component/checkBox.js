import React from 'react';

const Checkbox = (props)=>{
    return(
        <div>
            <label>
                <input 
                    type="checkbox"
                    name={props.name} 
                    id={props.id} 
                    onChange={props.onChange} 
                    checked={props.checked} />
                {props.name}
            </label>
        </div> 
    )
}

export default Checkbox

