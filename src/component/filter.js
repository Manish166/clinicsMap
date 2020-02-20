import React, { Component } from 'react'
import CheckBox from './checkBox'
import {connect} from 'react-redux'
import categories from '../data/cat.json'
import { setFilter } from '../actions/index'

class filter extends Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            filter : {"allClinics" : false,
                "generalMedical" : false,
                "generalDental" : false,
            }
        }
    }   

    async handleChange(e) {
        await this.setState({filter: {...this.state.filter, [e.target.id]:!this.state.filter[e.target.id]}})
        console.log("in filter", this.state.filter)
        this.props.setFilter(this.state.filter) 
    }

    render(){
        return (
            <React.Fragment>
                {categories.map(category => (
                    <CheckBox 
                        key={category.cat_id} 
                        id={category.cat_id}    
                        checked={this.state.filter.cat_id}
                        name={category.cat_name}
                        onChange={this.handleChange}
                    />
                ))}
            </React.Fragment>
        )
    }

}

const mapDispatchToProps = {
    setFilter
}


export default connect(null,mapDispatchToProps)(filter)
        