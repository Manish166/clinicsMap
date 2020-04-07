import React, { Component } from 'react'
import CheckBox from './CheckBox'
import {connect} from 'react-redux'
import categories from '../data/cat.json'
import { setFilter } from '../actions/index'

class CheckBoxFilter extends Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            choices : {"allClinics" : false,
                "generalMedical" : false,
                "generalDental" : false,
            }
        }
    }   

    handleChange(e) {
        this.setState({choices: {...this.state.choices, [e.target.id]:!this.state.choices[e.target.id]}})
        this.props.setFilter(this.state.choices) 
    }

    render(){
        return (
            <React.Fragment>
                {categories.map(category => (
                    <CheckBox 
                        key={category.cat_id} 
                        id={category.cat_id}    
                        checked={this.state.choices.cat_id}
                        name={category.cat_name}
                        onChange={this.handleChange}
                    />
                ))}
            </React.Fragment >
        )
    }
}

const mapDispatchToProps = {
    setFilter
}


export default connect(null,mapDispatchToProps)(CheckBoxFilter)
        