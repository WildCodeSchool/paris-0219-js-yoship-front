import React from 'react';
import {Switch} from 'react-router-dom';

import Header from '../components/Header/Header'
import Home from './../screen/Home'
import Login from './../screen/Login'
import Tracking from './../screen/Tracking'
import Register from './../screen/Register'
import ScrollToTopRoute from './Header/ScrollToTop'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <ScrollToTopRoute exact path="/" component={Home} />
        <ScrollToTopRoute path="/tracking" component={Tracking} />
        <ScrollToTopRoute path="/login" component={Login} />
        <ScrollToTopRoute path="/register" component={Register} />
      </Switch>

    </div>
   
  );
}

export default App;
