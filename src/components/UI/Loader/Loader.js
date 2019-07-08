import React, { Component } from 'react';
import './Loader.scss'

class Loader extends Component {
    state = { 
        
     }
    render() { 
        return (
          <div className="loader-container">
            <div className="sk-folding-cube">
              <div className="sk-cube1 sk-cube" />
              <div className="sk-cube2 sk-cube" />
              <div className="sk-cube4 sk-cube" />
              <div className="sk-cube3 sk-cube" />
            </div>
            <br></br>
            <p>Chargement...</p> 
          </div>
        );
    }
}
 
export default Loader;