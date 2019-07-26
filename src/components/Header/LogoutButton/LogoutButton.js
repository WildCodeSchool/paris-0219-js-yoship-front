import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import "./LogoutButton.scss"

class LogoutButton extends Component {
    state = {  
        redirect: false
    }

    onClick() {
        localStorage.removeItem("token");
        localStorage.removeItem("uuid");
        this.setState({
            redirect: true
        })
    }

    render() { 
        const { redirect } = this.state

        if (redirect) {
            return <Redirect to="/login" />
        }
        return (
          <Button className="buttondeco"
            variant="contained"
          
            onClick={this.onClick.bind(this)}
          
          >
            <i className="fas fa-power-off turn-off-logo" />Déconnexion
          </Button>
        );
    }
}
 
export default LogoutButton;

