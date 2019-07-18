import React from 'react';
import Button from '../Button/Button'
import { NavLink, Redirect, withRouter } from "react-router-dom";

// Packages
import axios from 'axios'

// Components
import { Input, CardImg, Col, Container } from 'reactstrap';

// Styling
import './Login.scss';

// Import config
const config = require('../../config/config')

class Login extends React.Component {

    state = {
        redirect: false,
        error_msg: "",
        error_email: "",
        error_password: "",
        role: ""
      };
    
      onSubmit = e => {
          console.log("test")
        e.preventDefault();
        axios
          .post(`http://localhost:${config.port}/login`, {
            password: e.target.password.value,
            mail: e.target.email.value
          })
          .then(res => {
            localStorage.setItem("token", res.headers["x-access-token"]);
            localStorage.setItem("uuid", res.data.uuid)
            console.log("test2");
            console.log(res.data)
            this.setState({
              redirect: true,
              role: res.data.role
            });
          })
          .catch(error => {
            console.log(error);
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
        const { redirect, role } = this.state;

        if (redirect) {
          if (role === "driver")
            return this.props.location.state === undefined ? <Redirect to="/dashboard" /> : <Redirect to={this.props.location.state.pathname} />
          if (role === "admin")
            return this.props.location.state === undefined ? <Redirect to="/admin" /> : <Redirect to={this.props.location.state.pathname} />
        }
        
    return (
      <section id="login" className="login">
        <Container>
          <div className="row align-items-center no-gutters mb-4 mb-lg-5">
            <Col xl="6" lg="6">
              <form className="box-login" onSubmit={this.onSubmit}>
                <p>
                  <label className="label-email-login" htmlFor="email">Email adress</label><br />
                  <div className="group-email">
                    <Input id="email" className="input-email-login" name="Email address" type="email" placeholder="Enter your email address" /></div>
                </p>
                <p>
                  <label className="label-password-login" htmlFor="password">Password</label><br />
                  <Input id="password" className="input-password-login" name="Password" type="text" placeholder="Enter your password" />
                </p>
                <div className="checkbox">
                  <label> <Input type="checkbox"></Input> Check me out</label>
                  <Button text="SUBMIT" />
                  {/* <Button className="button-login-submit">SUBMIT</Button> */}
                </div>
              </form>
            </Col>
            <Col xl="5" lg="6">
              <CardImg src="https://img.lght.pics/Cg0I.jpg" alt="Card image cap" />
            </Col>
          </div>
        </Container>
        <div className="not">
          <NavLink to="/status" >
            <Button text=" Pas encore inscrit ?" />
          </NavLink>
        </div>
      </section>

    )
  }
}

export default withRouter(Login);




