import React from 'react';

// Packages
import {Switch} from 'react-router-dom';

import Home from './../screen/Home'
import Login from './../screen/Login'
import Tracking from './../screen/Tracking'
import Register from './../screen/Register'
import StepVerification from '../screen/Verification';
import StepFormation from '../screen/Formation'
import StepStatus from '../screen/Status'
import Monprofil from '../screen/Profil';
import MyCar from '../screen/MyCar'
import HomeDashBoard from '../screen/HomeDashBoard'
import About from '../screen/About'
import Document from '../screen/Document'
import ProfilUpdate from '../screen/ProfilUpdate'
import MyCarUpdate from '../screen/MyCarUpdate'
import QuestionsPage from '../screen/QuestionsPage';
import ConfirmMail from "../screen/ConfirmMail.js"

// Custom Router Components
import PublicRoute from '../router/PublicRoute'
import PrivateRoute from '../router/PrivateRoute'
import MesDocuments from './Mesdocuments/MesDocuments';

function App() {
  return (
      <div>
        <Switch>
          <PublicRoute exact path="/" component={Home} />
          <PublicRoute path="/tracking" component={Tracking} />
          <PublicRoute path="/login" component={Login} />
          <PublicRoute path="/register" component={Register} />
          <PublicRoute path="/verification" component={StepVerification} />
          <PublicRoute path="/formation" component={StepFormation} />
          <PublicRoute path="/status" component={StepStatus} />
          <PublicRoute path="/apropos" component={About} />
          <PublicRoute path="/questions" component={QuestionsPage} />
          <PublicRoute path="/confirm/:token" component={ConfirmMail} />
          <PrivateRoute path="/mycar" permission="driver" component={MyCar} />
          <PrivateRoute path='/dashboard' permission="driver" component={HomeDashBoard} />
          <PrivateRoute path='/profil' permission="driver" component={Monprofil} />
          <PrivateRoute path='/document' permission="driver" component={Document} />
          <PrivateRoute path='/profilUpdate' permission="driver" component={ProfilUpdate} /> 
          <PrivateRoute path='/myCarUpdate' permission="driver" component={MyCarUpdate} />
        </Switch>
      </div>
  );
}

export default App;
