import React from 'react';
import { NavLink, Redirect } from "react-router-dom";

// Packages
import axios from 'axios'

// Components
import { Input, CardImg, Col, Container, Button } from 'reactstrap';
// import Button from '../Button/Button'

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
          console.log("test")
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

        // When form submited, redirected to /dashboard
        if (redirect) {
            return <Redirect to="/dashboard" />;
        }  

        console.log(redirect)

        return (
            <section id="login" className="login">
                <Container>
                    <div className="row align-items-center no-gutters mb-4 mb-lg-5">
                        <Col xl="6" lg="6">
                            <form className="box-login" onSubmit={this.onSubmit}>
                                <p>
                                    <label className="label-email-login" for="email">Email adress</label><br />
                                    <div className="group-email">
                                        <Input id="email" className="input-email-login" name="Email address" type="email" placeholder="Enter your email address" /></div>
                                </p>
                                <p>
                                    <label className="label-password-login" for="password">Password</label><br />
                                    <Input id="password" className="input-password-login" name="Password" type="text" placeholder="Enter your password" />
                                </p>
                                <div className="checkbox">
                                    <label> <Input type="checkbox"></Input> Check me out</label>
                                    <Button className="button-login-submit">SUBMIT</Button>
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
                        <Button className="not-member" >
                            <p>Not a member yet ? <br /> To become Yoship</p>
                        </Button>
                    </NavLink>
                </div>
            </section>

        )
    }
}

export default Login;




