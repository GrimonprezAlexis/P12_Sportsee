import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import User from './pages/User';

import Error from './components/Error';
import Header from './components/Header';
import NavVertical from './components/NavVertical';

import styled from 'styled-components';
import MockPage from './pages/Mock';


const StyledParentGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;

  @media screen and (min-width: 992px){
    margin-left: 0;
  }
  @media screen and (min-width: 1290px){
    margin-left: 6rem;
  }
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
            <Route path="/mocks/:id" component={MockPage} />
            <Route component={Error}/>
          </Switch>
        </StyledChildGrid>
      </StyledParentGrid>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
