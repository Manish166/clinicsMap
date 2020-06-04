import React, { Component } from 'react'
import RadioButton from './RadioButton'
import {connect} from 'react-redux'
import categories from '../data/cat.json'
import { setRadioFilter } from '../actions/index'

class RadioFilter extends Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            choice : null
        }
    }   

    async handleChange(e) {
        await this.setState({choice: e.currentTarget.id})
        this.props.setRadioFilter(this.state.choice) 
    }

    render(){
        return (
            <div>
                {categories.map(category => (
                    <RadioButton 
                        key={category.cat_id} 
                        name={category.cat_name}
                        value ={category.cat_name}
                        id={category.cat_id}    
                        checked={this.state.choice===category.cat_id}
                        onChange={this.handleChange}
                    />
                ))}
            </div>
        )
    }
}

const mapDispatchToProps = {
    setRadioFilter
}


export default connect(null,mapDispatchToProps)(RadioFilter)
        