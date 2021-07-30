import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import CategoryList from './components/Categories/CategoryList'

const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
        <Route path="/finance" exact component = {CategoryList}/>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes
