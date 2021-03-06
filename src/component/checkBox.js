import React from 'react';

const Checkbox = (props)=>{
    return(
        <React.Fragment>
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
        </React.Fragment> 
    )
}

export default Checkbox

