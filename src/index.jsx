import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import User from './pages/User'

import Header from './components/Header'
import Error from './components/Error'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
          <Route exact path="/" component={Home} />
           <Route path="/users/:id" component={User} />
          <Route component={Error}/>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
