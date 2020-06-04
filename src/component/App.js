import React from 'react'
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Switch  } from 'react-router-dom'
import store from '../store'
import Navigation from './Navigation'
import Home from '../pages/HomePage'
import AddClinicToPanel from '../pages/AddClinicToPanel'

class App extends React.Component{       
    render(){
        return(
            <Provider store={store}>
                <Router>
                    <div>
                        <Navigation/>
                        <Switch>
                            <Route path='/' exact component={Home}/>
                            <Route path='/updateClinic' component={AddClinicToPanel}/>
                        </Switch>
                        </div>
                </Router>
            </Provider>
        )
    }   
}

export default App