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
import About from '../screen/About'
import Document from '../screen/Document'

// Custom Router Components
import PublicRoute from '../router/PublicRoute'
import PrivateRoute from '../router/PrivateRoute'
import MesDocuments from './Mesdocuments/MesDocuments';

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
          <PrivateRoute path='/document' permission="driver" component={Document} />
          <PrivateRoute path="/apropos" component={About} />
        </Switch>
      </div>
  );
}

export default App;
