import React from 'react';
import axios from 'axios';
import { InputGroup, InputGroupAddon, Input, FormGroup, CustomInput, Form } from 'reactstrap';
import Button from '../UI/Button/Button';
import FrenchPhoneField from './FrenchPhoneField';
import logoPaperPlane from '../../assets/images/logoPaperPlane.svg';
import './Contact.scss';

const config = require('../../config/config');

class Contact extends React.Component {

    constructor(props) {
        super(props)
        this.submitForm = this.submitForm.bind(this)
    }

    state = {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        status: '',
        client: '',
        driver: '',
        brand: '',
        else: '',
        message: '',
        statusArray: ['customer', 'driver', 'brand', 'someonelse']
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    statusChange = (event) => {
        this.setState({ status: event.target.value });
    }

    setPhoneState = (value) => {
        this.setState({ phone: value });
    }

    submitForm(event) {
        event.preventDefault();
        let pathApi = process.env.REACT_APP_PATH_API_DEV + '/contact'
        if (process.env.NODE_ENV === 'production') {
          pathApi = process.env.REACT_APP_PATH_API_PROD + '/contact'
        }
        axios.post(`${pathApi}`, this.state)
            .then(res => {
                if (res.error) {
                    alert(res.error);
                } else {
                    alert(this.state.firstname + ` votre message a été envoyé à l'équipe Yoship`);
                    window.location.reload() //refreshed page
                }
            })
            .catch(e => {
                console.error(e);
                alert(`Erreur d'envoi`);
            });
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.submitForm} id="contact-wrapper">
                    <div className="contact-logo">
                        <img src={logoPaperPlane} className="logo-plane" alt="logo" />
                    </div>
                    <div className="contact-title">
                        <h2>Contactez-nous !</h2>
                    </div>
                    <Input
                        className="contact-firstname"
                        name="firstname"
                        placeholder="Prénom"
                        requiered="requiered"
                        type="text"
                        value={this.state.firstname}
                        onChange={this.handleChange}
                    />
                    <Input
                        className="contact-lastname"
                        name="lastname"
                        placeholder="Nom"
                        type="text"
                        requiered="requiered"
                        value={this.state.lastname}
                        onChange={this.handleChange}
                    />
                    <InputGroup
                        className="contact-email"
                    >
                        <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                        <Input
                            name="email"
                            placeholder="Adresse mail"
                            type="email"
                            requiered="requiered"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </InputGroup>
                    <span className="contact-phone"><FrenchPhoneField getPhone={this.setPhoneState} /></span>
                    <FormGroup className="contact-status">
                        <CustomInput type="select" id="exampleCustomSelect" name="customSelect" onChange={this.statusChange} >
                            <option value="">Sélectionnez votre statut : </option>>
                            <option value="customer">Je suis un client privilégié</option>
                            <option value="driver">Je suis un chauffeur Yoship</option>
                            <option value="brand">Je suis une enseigne de Luxe</option>
                            <option value="someonelse">Quelqu'un d'autre</option>
                        </CustomInput>
                    </FormGroup>
                    <FormGroup
                        className="contact-message">
                        <Input
                            type="textarea"
                            name="message"
                            id="exampleText"
                            placeholder="Ecrivez ici votre message..."
                            rows={5}
                            value={this.state.message}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <div className="contact-button">
                        <Button type="submit" text="Envoyer" />
                    </div>
                </Form>
            </div>
        );
    }
}
export default Contact;










