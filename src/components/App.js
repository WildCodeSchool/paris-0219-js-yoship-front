import React from 'react';
import { Route, Switch} from 'react-router-dom';

import Header from '../components/Header/Header'
import Home from './../screen/Home'
import Login from './../screen/Login'
import Tracking from './../screen/Tracking'
import Register from './../screen/Register'
import StepVerification from '../screen/Verification';
import StepFormation from '../screen/Formation'
import StepStatus from '../screen/Status'
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/tracking" component={Tracking} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/verification" component={StepVerification} />
        <Route path="/formation" component={StepFormation} />
        <Route path="/status" component={StepStatus} />
        
      </Switch>
    </div>
   
  );
}

export default App;
