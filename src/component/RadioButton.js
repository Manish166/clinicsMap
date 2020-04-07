import React from 'react';

const RadioButton = (props)=>{
    console.log(props)
    return(
        <React.Fragment>
            <label style={{"color": "white", "marginLeft": '1.5rem'}}>
                <input style={{"margin" : ".5rem"}}
                    type="radio"
                    key={props.key}
                    value={props.value}
                    id={props.id}
                    checked={props.checked}
                    onChange={props.onChange} 
                ></input>
                {props.name}
            </label> 
        </React.Fragment> 
    )
}

export default RadioButton

