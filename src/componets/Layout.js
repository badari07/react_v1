import React from 'react'
import Search from './Search'
import Landing from './Landing'
import Details from './Details'
import { shows } from '../../public/data.json'
import { Route, Switch } from 'react-router-dom'

const Layout = () => (
  <div className='app-container'>
    <Switch>
      <Route exact path='/search' render={(routeProps) => (<Search {...routeProps} shows={shows} />)} />
      {/* <Route exact path='/search' component={Search} shows={shows} /> */}
      <Route exact path='/' component={Landing} />
      <Route exact path='/details/:id' component={Details} />
    </Switch>
  </div>

)

export default Layout
