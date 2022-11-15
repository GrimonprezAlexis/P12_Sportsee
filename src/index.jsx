import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import User from './pages/User'

import Error from './components/Error'
import Header from './components/Header'
import NavVertical from './components/NavVertical'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <div className='col12 flex'>
        <div className='col1'>
          <NavVertical />
        </div>
        <div className='col11'>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/users/:id" component={User} />
              <Route component={Error}/>
          </Switch>
        </div>

      </div>

    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
