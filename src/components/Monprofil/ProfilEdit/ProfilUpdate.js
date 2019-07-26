
import React from 'react';
import { Col, Container, Button, CardTitle } from 'reactstrap';


import axios from 'axios'
import { validatorAlpha, validatorMail, validatorDate, validatorNum, validatorEmpty } from '../../ValidatorForm/ValidatorForm';
import Loader from '../../UI/Loader/Loader';
import { Redirect } from 'react-router-dom';
import "./ProfilUpdate.scss"

const config = require('../../../config/config')

class ProfilUpdate extends React.Component {
    state = {

        loading: true,
        data: {},
        redirect: false,

    }

    getData = () => {
        const token = localStorage.getItem("token")
        const uuid = localStorage.getItem("uuid")
        axios({
            method: 'Get',
            url: `http://localhost:${config.port}/users/${uuid}`,
            headers: {
                'x-access-token': `${token}`
            }
        })
            .then(res => {
                const result = res.data[0]
                this.setState({ result, loading: false })
                console.log("getData", this.state.result)
            })

    }

    componentDidMount = () => {
        this.getData()
    }

    handleChange = (e) => {
        let { result } = this.state
        result[e.target.name] = e.target.value

        this.setState({
            result
        })
        // this.setState( () => ({
        //     result : {
        //         ...this.state.result,
        //         firstName: e.target.value
        //     }
        // }))

    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const data = this.state.result

        const dataToSend = {
            dateOfBirth: data.dateOfBirth,
            firstname: data.firstname,
            mail: data.mail,
            name: data.name,
            //password: data.password,
            phone: data.phone,
            pseudo: data.pseudo,
            address: data.address,
            postcode: data.postcode,
            city: data.city,
            country: data.country,
            description: data.description,
            role: "driver"
        }
        const token = localStorage.getItem("token")
        const uuid = localStorage.getItem("uuid")
        await axios(
            {
                url: `http://localhost:${config.port}/users/${uuid}`,
                method: 'Put',
                data: dataToSend,
                headers: { 'x-access-token': `${token}` }
            })
        this.setState({ redirect: true })
    }
    render() {
        const redirect = this.state.redirect;

        if (redirect) {
            return <Redirect to="/dashboard" />

        }
        else if (this.state.loading) {
            return <Loader />

        } else {

            return (
                <section id="register" className="register">
                    <Loader triggerAnim={true} />
                    <Container>

                        <div className="row justify-content-around  mb-4 mb-lg-4">
                            <Col xl="12" lg="12">
                                <CardTitle className="cardtitleinformation" icon="user-plus" ><h4> Edite ton profil</h4></CardTitle>
                            </Col>
                            {/* <form onSubmit={this.handleSubmit}> */}

                            <Col xl="4" lg="4">
                                <label htmlFor="firstname">Prénom :</label>
                                <fieldset>

                                    <input
                                        type="text"
                                        name="firstname"
                                        onChange={this.handleChange}
                                        value={this.state.result.firstname}
                                        onBlur={validatorAlpha}
                                        required
                                    />
                                    <p id='firstname'></p>
                                </fieldset>

                            </Col>

                            <Col xl="4" lg="4">
                                <label htmlFor="name">Nom :</label>
                                <fieldset>

                                    <input
                                        type="text"
                                        name="name"
                                        onChange={this.handleChange}
                                        value={this.state.result.name}
                                        onBlur={validatorAlpha}
                                        required
                                    />
                                    <p id='name'></p>
                                </fieldset>
                            </Col>
                            <Col xl="4" lg="4">
                                <label htmlFor="pseudo">Pseudo :</label>
                                <fieldset>
                                    <input
                                        type="text"
                                        name="pseudo"
                                        onChange={this.handleChange}
                                        value={this.state.result.pseudo}
                                        onBlur={validatorEmpty}
                                        required
                                    />
                                    <p id='pseudo'></p>
                                </fieldset>
                            </Col>
                            <Col xl="4" lg="4">
                                <label htmlFor="mail">Mail :</label>

                                <fieldset>

                                    <input
                                        type="text" // email ? 
                                        name="mail"
                                        onChange={this.handleChange}
                                        value={this.state.result.mail}
                                        onBlur={validatorMail}
                                        required
                                    />
                                    <p id='mail'></p>
                                </fieldset>
                            </Col>
                            <Col xl="4" lg="4">
                                <label htmlFor="dateOfBirth">Date de naissance :</label>
                                <fieldset>

                                    <input
                                        type="text" //or date ? 
                                        name="dateOfBirth"
                                        onChange={this.handleChange}
                                        value={this.state.result.dateOfBirth}
                                        onBlur={validatorDate}
                                        required
                                    />
                                    <p id='dateOfBirth'></p>
                                </fieldset>
                            </Col>
                            <Col xl="4" lg="4">
                                <label htmlFor="phone">Téléphone :</label>
                                <fieldset>

                                    <input
                                        type="tel" //or tel ? 
                                        name="phone"
                                        onChange={this.handleChange}
                                        value={this.state.result.phone}
                                        onBlur={validatorNum}
                                        required
                                    />
                                    <p id='phone'></p>

                                </fieldset>
                            </Col>
                            <Col xl="4" lg="4">
                                <label htmlFor="address">Adresse:</label>
                                <fieldset>

                                    <input
                                        type="text"
                                        name="address"
                                        onChange={this.handleChange}
                                        value={this.state.result.address}
                                        onBlur={validatorAlpha}
                                        required
                                    />
                                </fieldset>
                                <p id='address'></p>
                            </Col>
                            <Col xl="4" lg="4">
                                <label htmlFor="postcode">Code Postal:</label>
                                <fieldset>

                                    <input
                                        type="text" //or number ? 
                                        name="postcode"
                                        onChange={this.handleChange}
                                        value={this.state.result.postcode}
                                        onBlur={validatorNum}
                                        required
                                    />
                                    <p id='postcode'></p>

                                </fieldset>
                            </Col>
                            <Col xl="4" lg="4">
                                <label htmlFor="city">Ville:</label>
                                <fieldset>

                                    <input
                                        type="text"
                                        name="city"
                                        onChange={this.handleChange}
                                        value={this.state.result.city}
                                        onBlur={validatorAlpha}
                                        required
                                    />
                                    <p id='city'></p>
                                </fieldset>
                            </Col>

                            <Col xl="4" lg="4">
                                <label htmlFor="country">Pays:</label>
                                <fieldset>

                                    <input
                                        type="text"
                                        name="country"
                                        onChange={this.handleChange}
                                        value={this.state.result.country}
                                        onBlur={validatorAlpha}
                                        required
                                    />
                                    <p id='country'></p>
                                </fieldset>
                            </Col>
                            <Col xl="4" lg="4">
                                <label htmlFor="description">Description:</label>
                                <fieldset>

                                    <input
                                        type="textarea"
                                        name="description"
                                        onChange={this.handleChange}
                                        value={this.state.result.description}
                                        onBlur={validatorAlpha}
                                        required
                                    />
                                    <p id='description'></p>
                                </fieldset>
                            </Col>
                            <Col xl="4" lg="4" />

                            {/* </form> */}
                        </div>
                    </Container>
                    <div className= 'container'>
                        <Button type="submit" onClick={this.handleSubmit} className="login-button btn-secondary">Valider les modifications</Button>
                    </div>



                </section>
            )
        }
    }
}




export default ProfilUpdate