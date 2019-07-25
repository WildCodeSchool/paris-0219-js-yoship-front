import React from 'react';
// Packages
import {Switch} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './../screen/Home'
import Login from './../screen/Login'
import Tracking from './../screen/Tracking'
import Register from './../screen/Register'
import StepVerification from '../screen/Verification';
import StepFormation from '../screen/Formation'
import StepStatus from '../screen/Status'
import Monprofil from '../screen/Profil';

import AdminDashboard from '../screen/Admin/AdminDashboard'
import CheckDocument from '../screen/Admin/CheckDocument'

import MyCar from '../screen/MyCarDisplay'
import HomeDashBoard from '../screen/HomeDashBoard'
import About from '../screen/About'
import Document from '../screen/Document'
import ProfilUpdate from '../screen/ProfilUpdate'
import MyCarPost from '../screen/MyCarPost'
import QuestionsPage from '../screen/QuestionsPage';
import MyCarProfil from '../screen/MyCarProfil'
import ConfirmMail from "../screen/ConfirmMail.js"
import MyCarDisplay from '../screen/MyCarDisplay';
import Earnings from '../screen/Earnings'

// Custom Router Components
import PublicRoute from '../router/PublicRoute'
import PrivateRoute from '../router/PrivateRoute'

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
          <PrivateRoute path='/admin' permission="admin" component={AdminDashboard} />
          <PrivateRoute path='/documents/:uuid' permission="admin" component={CheckDocument} />
          <PrivateRoute path='/document' permission="driver" component={Document} />
          <PrivateRoute path='/mycarpost' permission="driver" component={MyCarPost} />
          <PrivateRoute path='/profilUpdate' permission="driver" component={ProfilUpdate} /> 
          <PrivateRoute path='/mycarprofil' permission="driver" component={MyCarProfil} /> 
          <PrivateRoute path='/mycardisplay' permission="driver" component={MyCarDisplay} /> 
          <PrivateRoute path='/earnings' permission="driver" component={Earnings} /> 


        </Switch>
        <ToastContainer />
      </div>
  );
}
export default App;
