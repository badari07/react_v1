import React from 'react'
import Search from './Search'
import Landing from './Landing'
import { Route, Switch } from 'react-router-dom'

const Layout = () => (
  <div className='app-container'>
    <Switch>
      <Route exact path='/search' component={Search} />
      <Route exact path='/' component={Landing} />
    </Switch>
  </div>

)

export default Layout
