import React from 'react';
import {Switch} from 'react-router-dom';

import Header from '../components/Header/Header'
import Home from './../screen/Home'
import Login from './../screen/Login'
import Tracking from './../screen/Tracking'
import Monprofil from '../screen/Profil';
import Register from './../screen/Register'
import StepVerification from '../screen/Verification';
import StepFormation from '../screen/Formation'
import StepStatus from '../screen/Status'
import ScrollToTopRoute from './Header/ScrollToTop'
import Questions from './Monprofil/Questions/Questions';

function App() {
  return (
    <div>
      <Header />
      <Switch>

        <ScrollToTopRoute exact path="/" component={Home} />
        <ScrollToTopRoute path="/tracking" component={Tracking} />
        <ScrollToTopRoute path="/login" component={Login} />
        <ScrollToTopRoute path="/register" component={Register} />
        <ScrollToTopRoute path="/verification" component={StepVerification} />
        <ScrollToTopRoute path="/formation" component={StepFormation} />
        <ScrollToTopRoute path="/status" component={StepStatus} />
        <ScrollToTopRoute path="/profil" component={Monprofil} />
        <ScrollToTopRoute path="/questions" component={Questions} />

      </Switch>

    </div>
   
  );
}

export default App;
