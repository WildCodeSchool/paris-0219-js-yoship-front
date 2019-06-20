import React from 'react';
import './Register.scss';
import { Input, Col, Container, Button, Progress } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { Field, formInputData, formValidation } from 'reactjs-input-validator';

class Register extends React.Component {
    state = {
        redirect: false,
        data: {},
    };

    handleChange = (event, inputValue, inputName, validationState, isRequired) => {
        const value = (event && event.target.value) || inputValue;
        const { data } = this.state;
        data[inputName] = { value, validation: validationState, isRequired };
        this.setState({
            data,
        });
        // if you want access to your form data
        const formData = formInputData(this.state.data); // eslint-disable-line no-unused-vars
        // tells you if the entire form validation is true or false
        const isFormValid = formValidation(this.state.data); // eslint-disable-line no-unused-vars
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const isFormValid = formValidation(this.state.data);

        if (isFormValid) {
            // do anything including ajax calls
            this.setState({ callAPI: true });
            this.setState({ redirect: true })

        } else {
            this.setState({ callAPI: true, shouldValidateInputs: !isFormValid });
        }
    }
    render() {
        const passwordValue = this.state.data.password && this.state.data.password.value;
        const redirect = this.state.redirect;

        if (redirect) {
            return <Redirect to="/" />
        } else {
            return (
                <section id="register" className="register">
                    <Container>
                        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
                            {/* label + input fisrt name */}

                            <Col xl="5" lg="5">
                                <Field
                                    required label="First Name" name="fullName" placeholder="First name"
                                    onChange={this.handleChange}
                                    value={this.state.data.fullName}
                                    shouldValidateInputs={this.state.shouldValidateInputs} />
                            </Col>

                            {/* label + Input last-name */}

                            <Col xl="5" lg="5">
                                <Field
                                    required label="Last name" name="firstName" placeholder="Last name"
                                    onChange={this.handleChange}
                                    value={this.state.data.firstName}
                                    shouldValidateInputs={this.state.shouldValidateInputs} />
                            </Col>

                            <Col xl="5" lg="5">

                                <label for="naissance">Date de naissance :</label>
                                <Input
                                    type="date"
                                    name="naissance"
                                    id="naissance"
                                    placeholder="date placeholder"
                                />

                            </Col>

                            <Col xl="5" lg="5">

                                <Field
                                    required label="Pseudo" name="pseudo" placeholder="Pseudo"
                                    onChange={this.handleChange}
                                    value={this.state.data.pseudo}
                                    shouldValidateInputs={this.state.shouldValidateInputs} />

                            </ Col>
                            {/* label + Input email */}
                            <Col xl="5" lg="5">

                                <Field
                                    validator="isEmail" required
                                    label="Email" name="email" placeholder="Email"
                                    onChange={this.handleChange}
                                    value={this.state.data.email}
                                    shouldValidateInputs={this.state.shouldValidateInputs}
                                />
                            </Col>
                            <Col xl="5" lg="5">

                                <Field
                                    validator="isNumeric" required minLength={10}
                                    minLengthErrMsg="Try one with atleast 10 numbers"
                                    label="Phone number" name="isNumeric" placeholder="Phone number"
                                    onChange={this.handleChange}
                                    value={this.state.data.isNumeric}
                                    shouldValidateInputs={this.state.shouldValidateInputs}
                                />
                            </Col>

                            {/* label + Input phone */}

                            {/* label + Input password */}
                            <Col xl="5" lg="5">
                                <Field
                                    validator="isAlphanumeric" required minLength={4}
                                    minLengthErrMsg="Short passwords are easy to guess. Try one with atleast 4 characters"
                                    label="Create a password" name="password" type="password" placeholder="Password"
                                    onChange={this.handleChange}
                                    value={this.state.data.password}
                                    shouldValidateInputs={this.state.shouldValidateInputs}
                                />
                            </Col>
                            {/* label + Input password confirmation */}
                            <Col xl="5" lg="5">

                                <Field
                                    validator="equals" required comparison={passwordValue}
                                    validatorErrMsg="These passwords don't match. Try again?"
                                    label="Confirm password" name="confirmPassword" type="password" placeholder="Password"
                                    onChange={this.handleChange}
                                    value={this.state.data.confirmPassword}
                                    shouldValidateInputs={this.state.shouldValidateInputs}
                                />
                            </Col>

                        </div>
                    </Container>
                    {/* checkbox terms and conditions  */}
                    <div className="not">
                        <div className="checkbox">
                            <label> <Input type="checkbox"></Input> Agree to terms and conditions</label>

                            <div>

                                <Button type="submit" onClick={this.handleSubmit} className="button-login-submit">SUBMIT FORM</Button>

                            </div>

                            <div>
                                <div className="barprogress">Etapes 1 sur 3</div>
                                <Progress animated value="33.333" />
                                <div className="barprogress">Début du processus</div>
                            </div>
                        </div>
                    </div>



                </section>
            )
        }
    }
}

export default Register;