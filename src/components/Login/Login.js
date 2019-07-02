import React from 'react';
import { NavLink, Redirect } from "react-router-dom";

// Packages
import axios from 'axios'

// Components
import { Input, InputGroupAddon} from 'reactstrap';
import Button from '../Button/Button'

// Styling
import './Login.scss';

class Login extends React.Component {
    state = {
        redirect: false,
        error_msg: "",
        error_email: "",
        error_password: ""
      };
    
      onSubmit = e => {
        e.preventDefault();
        axios
          .post("http://localhost:3031/login", {
            password: e.target.password.value,
            mail: e.target.email.value
          })
          .then(res => {
            localStorage.setItem("token", res.headers["x-access-token"]);
            localStorage.setItem("uuid", res.data.uuid)

            this.setState({
              redirect: true
            });
          })
          .catch(error => {
    
            // Dom selectors
            const emailDom = document.querySelector("#email");
            const passwordDom = document.querySelector("#password");
    
            // Not Found 
            if (error.response.statusText === "Not Found") {
              this.setState({
                error_msg: error.response.data,
                error_email: true,
                error_password: false
              });
              // Resets email input
              emailDom.value = "";
              emailDom.focus();
            } else if (error.response.statusText === "Unauthorized") {
              this.setState({
                error_msg: error.response.data.error_msg,
                error_email: false,
                error_password: true
              });
              // Resets password input
              passwordDom.value = "";
              passwordDom.focus();
            }
          });
      };

    render() {
        // State declaration
        const { redirect } = this.state;

        // When form submited, redirected to /protected
        if (redirect) {
            return <Redirect to="/dashboard" />;
        }

        return (
            <form className="container-form-login" onSubmit={this.onSubmit}> 
            {/* label + input + picto email */}  
                <p>
                    <label className="label-email-login" for="email">Email adress</label><br />
                    <div className="group-email"> 
                        <InputGroupAddon addonType="prepend">@</InputGroupAddon><br />
                        <Input id="email" className="input-email-login" name="Email address" type="email" placeholder="Enter your email address" />
                    </div>
                </p>
            {/* label + input + password */}  
                <p>
                    <label className="label-password-login" for="password">Password</label><br />
                    <Input id="password" className="input-password-login" name="Password" type="text" placeholder="Enter your password"/>
                </p>
            {/* checkbox check me out  */}
                <span className="group-check">
                <Input type="checkbox" /><label> Check me out</label><br/>
                </span>
                <span className="button-login"><Button text="SUBMIT"/></span>
            {/* boutton submt */}
            </form>
        )
    }
}

export default Login;