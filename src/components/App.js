import React from 'react';

// Packages
import {Switch} from 'react-router-dom';

// Components
import Header from '../components/Header/Header'
import Home from './../screen/Home'
import Login from './../screen/Login'
import Tracking from './../screen/Tracking'
import Register from './../screen/Register'
import StepVerification from '../screen/Verification';
import StepFormation from '../screen/Formation'
import StepStatus from '../screen/Status'
import Monprofil from '../screen/Profil';
import MyCar from '../screen/MyCar'
import Dashboard from '../screen/Dashboard'

// Custom Router Components
import PublicRoute from '../router/PublicRoute'
import PrivateRoute from '../router/PrivateRoute'

function App() {
  return (
      <div>
        <Header />
        <Switch>
          <PublicRoute exact path="/" component={Home} />
          <PublicRoute path="/tracking" component={Tracking} />
          <PublicRoute path="/login" component={Login} />
          <PublicRoute path="/register" component={Register} />
          <PublicRoute path="/verification" component={StepVerification} />
          <PublicRoute path="/formation" component={StepFormation} />
          <PublicRoute path="/status" component={StepStatus} />
          <PrivateRoute path="/mycar" permission="driver" component={MyCar} />
          <PrivateRoute path='/dashboard' permission="driver" component={Dashboard} />
          <PrivateRoute path='/profil' permission="driver" component={Monprofil} />
        </Switch>
      </div>
  );
}

export default App;
