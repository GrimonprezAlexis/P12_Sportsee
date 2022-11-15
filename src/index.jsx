import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import User from './pages/User';

import Error from './components/Error';
import Header from './components/Header';
import NavVertical from './components/NavVertical';

import styled from 'styled-components';

const StyledParentGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 12fr;
    grid-template-rows: 1024px;
    grid-column-gap: 50px;
    grid-row-gap: 0px;
`;

const StyledChildGrid = styled.div`
  grid-area: auto;
`;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <StyledParentGrid>
        <StyledChildGrid><NavVertical /></StyledChildGrid>
        <StyledChildGrid>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/users/:id" component={User} />
            <Route component={Error}/>
          </Switch>
        </StyledChildGrid>
      </StyledParentGrid>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
