import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import allTheActions from '../../../actions'
import axios from 'axios'
import { Input, Col, Container, Button } from 'reactstrap';
import { Field, formInputData, formValidation } from 'reactjs-input-validator';
import UnconfirmedMail from '../UnconfirmedMail/UnconfirmedMail'
import './Register.scss';

const config = require('../../../config/config')

class Register extends React.Component {
    state = {

        redirect: false,
        data: {},
    }

    handleChange = (event, inputValue, inputName, validationState, isRequired) => {
        const value = (event && event.target.value) || inputValue;
        const { data } = this.state;
        data[inputName] = { value, validation: validationState, isRequired };
        this.setState({
            data,
        })
        this.setState({ event })
        // if you want access to your form data
        const formData = formInputData(this.state.data); // eslint-disable-line no-unused-vars
        // tells you if the entire form validation is true or false
        const isFormValid = formValidation(this.state.data); // eslint-disable-line no-unused-vars
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const isFormValid = formValidation(this.state.data);
        if (isFormValid && document.getElementById('terms').checked) {
            const data = this.state.data
            const dataToSend = {
                dateOfBirth: data.dateOfBirth.value,
                firstname: data.firstname.value,
                mail: data.mail.value,
                name: data.name.value,
                password: data.password.value,
                phone: data.phone.value,
                pseudo: data.pseudo.value,
                address: data.address.value,
                postcode: data.postcode.value,
                city: data.city.value,
                country: data.country.value,
                role: "driver"
            }

            axios.post(`http://localhost:${config.port}/register`, (dataToSend))
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })
            this.setState({ callAPI: true });
            this.setState({ redirect: true })

        } else {
            this.setState({ callAPI: true, shouldValidateInputs: !isFormValid });
        }
    }
    componentDidMount = () => { }

    render() {
        const passwordValue = this.state.data.password && this.state.data.password.value;
        const redirect = this.state.redirect;

        if (redirect) {
            return <UnconfirmedMail mail={this.state.data.mail.value} />
        } else {

            return (
                <section id="register" className="register">
                    <Container>
                        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
                            <Col xl="5" lg="5">
                                <Field
                                    required label="Prénom" name="firstname" placeholder="Prénom"
                                    onChange={this.handleChange}
                                    value={this.state.data.firstname}
                                    shouldValidateInputs={this.state.shouldValidateInputs} />
                            </Col>
                            <Col xl="5" lg="5">
                                <Field
                                    required label="Nom" name="name" placeholder="Nom"
                                    onChange={this.handleChange}
                                    value={this.state.data.name}
                                    shouldValidateInputs={this.state.shouldValidateInputs} />
                            </Col>
                            <Col xl="5" lg="5">
                                <Field
                                    required label="Date de naissance" name="dateOfBirth" placeholder="Date de naissance"
                                    onChange={this.handleChange}
                                    value={this.state.data.dateOfBirth}
                                    shouldValidateInputs={this.state.shouldValidateInputs} />
                            </Col>
                            <Col xl="5" lg="5">
                                <Field
                                    required label="Pseudo" name="pseudo" placeholder="Pseudo"
                                    onChange={this.handleChange}
                                    value={this.state.data.pseudo}
                                    shouldValidateInputs={this.state.shouldValidateInputs} />

                            </ Col>
                            <Col xl="5" lg="5">
                                <Field
                                    required label="Adresse" name="address" placeholder="Adresse"
                                    onChange={this.handleChange}
                                    value={this.state.data.address}
                                    shouldValidateInputs={this.state.shouldValidateInputs} />
                            </Col>
                            <Col xl="5" lg="5">
                                <Field
                                    required label="Code Postal" name="postcode" placeholder="Code Postal"
                                    onChange={this.handleChange}
                                    value={this.state.data.postcode}
                                    shouldValidateInputs={this.state.shouldValidateInputs} />
                            </Col>
                            <Col xl="5" lg="5">
                                <Field
                                    required label="Ville" name="city" placeholder="Ville"
                                    onChange={this.handleChange}
                                    value={this.state.data.city}
                                    shouldValidateInputs={this.state.shouldValidateInputs} />
                            </Col>
                            <Col xl="5" lg="5">
                                <Field
                                    required label="Pays" name="country" placeholder="Pays"
                                    onChange={this.handleChange}
                                    value={this.state.data.country}
                                    shouldValidateInputs={this.state.shouldValidateInputs} />
                            </Col>
                            <Col xl="5" lg="5">
                                <Field
                                    validator="isEmail" required
                                    label="Email" name="mail" placeholder="Email"
                                    onChange={this.handleChange}
                                    value={this.state.data.mail}
                                    shouldValidateInputs={this.state.shouldValidateInputs}
                                />
                            </Col>
                            <Col xl="5" lg="5">

                                <Field
                                    validator="isNumeric" required minLength={10}
                                    minLengthErrMsg="Essayez-en un avec au moins 10 chiffres"
                                    label="Téléphone" name="phone" placeholder="Téléphone"
                                    onChange={this.handleChange}
                                    value={this.state.data.phone}
                                    shouldValidateInputs={this.state.shouldValidateInputs}
                                />
                            </Col>
                            {/* label + Input phone */}
                            {/* label + Input password */}
                            <Col xl="5" lg="5">
                                <Field
                                    validator="isAlphanumeric" required minLength={4}
                                    minLengthErrMsg="Les mots de passe courts sont faciles à deviner. Essayez-en un avec au moins 4 caractères."
                                    label="Créer son mot de passe" name="password" type="password" placeholder="Mot de passe"
                                    onChange={this.handleChange}
                                    value={this.state.data.password}
                                    shouldValidateInputs={this.state.shouldValidateInputs}
                                />
                            </Col>
                            {/* label + Input password confirmation */}
                            <Col xl="5" lg="5">
                                <Field
                                    validator="equals" required comparison={passwordValue}
                                    validatorErrMsg="Ce mot de passe ne correspond pas. Réessayer ?"
                                    label="Confirmer son mot de passe" name="confirmPassword" type="password" placeholder="Mot de passe"
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
                            <label> <Input type="checkbox" id="terms"></Input> Accepter les termes et conditions.</label>
                            <div>
                                <Button type="submit" onClick={this.handleSubmit} className="button-login-submit">SOUMETTRE</Button>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
        formAction: bindActionCreators(allTheActions.formActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register)
