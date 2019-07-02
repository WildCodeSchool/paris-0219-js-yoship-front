import React from 'react';

import { NavLink } from 'react-router-dom';
// import Button from '../Button/Button'
import { Input, CardImg, Col, Container, Button } from 'reactstrap';

import './Login.scss';
class Login extends React.Component {
    render() {
        return (
            <section id="login" className="login">
                <Container>
                    <div className="row align-items-center no-gutters mb-4 mb-lg-5">
                        <Col xl="6" lg="6">
                            <div className="box-login">
                                <p>
                                    <label className="label-email-login" for="email">Email adress</label><br />
                                    <div className="group-email">
                                        <Input className="input-email-login" name="Email address" type="email" placeholder="Enter your email address" /></div>
                                </p>
                                <p>
                                    <label className="label-password-login" for="password">Password</label><br />
                                    <Input className="input-password-login" name="Password" type="text" placeholder="Enter your password" />
                                </p>
                                <div className="checkbox">
                                    <label> <Input type="checkbox"></Input> Check me out</label>
                                    <Button className="button-login-submit">SUBMIT</Button>
                                </div>
                            </div>
                        </Col>
                        <Col xl="5" lg="6">
                            <CardImg src="https://img.lght.pics/Cg0I.jpg" alt="Card image cap" />
                        </Col>
                    </div>
                </Container>
                <div className="not">



                    <NavLink to="/status" >
                        <Button
                            className="not-member" >

                            <p>
                                Not a member yet ? <br /> To become Yoship
                        </p>
                        </Button>
                    </NavLink>
                </div>
            </section>

        )
    }
}

export default Login;




