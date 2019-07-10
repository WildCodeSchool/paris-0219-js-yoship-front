import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Favicon from 'react-favicon';

import * as serviceWorker from './services/serviceWorker';
import store from './config/store';
import App from './components/App';


import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
   
   <Provider store={store}>

   <div><Favicon url="https://i.ibb.co/sHV38jq/yoship-logo.png" /></div>
        <BrowserRouter>
            <App         
            />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
