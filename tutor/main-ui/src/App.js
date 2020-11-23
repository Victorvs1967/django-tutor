import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navibar from './components/Navbar';
import Cards from './components/Cards';
import CategoryDetail from './components/CategoryDetail';
import PostDetail from './components/PostDetail';


const App = () =>  (
  <BrowserRouter>
    <Navibar />
    <Container className="pt-5" >
      <Switch>
        <Route path="/" exact component={Cards} />
        <Route path="/category/:id/" exact component={CategoryDetail} />
        <Route path="/post/:id/" exact component={PostDetail} />
      </Switch>
    </Container>
  </BrowserRouter>
);

export default App;
