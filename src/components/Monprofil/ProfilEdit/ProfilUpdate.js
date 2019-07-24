import React from 'react';
import { Col, Container, Button } from 'reactstrap';
import axios from 'axios'

const config = require('../../../config/config')

class ProfilUpdate extends React.Component {
    state = {

        redirect: false,
        loading: true,
        data: {}

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
    }


    handleSubmit = (event) => {
        event.preventDefault();
        const data = this.state.result
        const dataToSend = {
            dateOfBirth: data.dateOfBirth,
            firstname: data.firstname,
            mail: data.mail,
            name: data.name,
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
        axios(
            {
                url: `http://localhost:${config.port}/users/${uuid}`,
                method: 'Put',
                data: dataToSend,
                headers: { 'x-access-token': `${token}` }
            })
    }



    render() {
        if (this.state.loading)
            return <div>Chargement</div>
        console.log(this.state.result);
        return (
            <section id="register" className="register">
                <Container>
                    <div className="row align-items-center no-gutters mb-4 mb-lg-4">
                        <Col xl="4" lg="4">
                            <fieldset>
                                <label htmlFor="firstname">Prénom :</label>
                                <input
                                    type="text"
                                    name="firstname"
                                    onChange={this.handleChange}
                                    value={this.state.result.firstname}
                                />
                            </fieldset>
                        </Col>
                        <Col xl="4" lg="4">
                            <fieldset>
                                <label htmlFor="name">Nom :</label>
                                <input
                                    type="text"
                                    name="name"
                                    onChange={this.handleChange}
                                    value={this.state.result.name}
                                />
                            </fieldset>
                        </Col>
                        <Col xl="4" lg="4">
                            <fieldset>
                                <label htmlFor="pseudo">Pseudo :</label>
                                <input
                                    type="text"
                                    name="pseudo"
                                    onChange={this.handleChange}
                                    value={this.state.result.pseudo}
                                />
                            </fieldset>
                        </Col>
                        <Col xl="4" lg="4">
                            <fieldset>
                                <label htmlFor="mail">Mail :</label>
                                <input
                                    type="text"
                                    name="mail"
                                    onChange={this.handleChange}
                                    value={this.state.result.mail}
                                />
                            </fieldset>
                        </Col>
                        <Col xl="4" lg="4">
                            <fieldset>
                                <label htmlFor="dateOfBirth">Date de naissance :</label>
                                <input
                                    type="text"
                                    name="dateOfBirth"
                                    onChange={this.handleChange}
                                    value={this.state.result.dateOfBirth}
                                />
                            </fieldset>
                        </Col>
                        <Col xl="4" lg="4">
                            <fieldset>
                                <label htmlFor="phone">Téléphone :</label>
                                <input
                                    type="text"
                                    name="phone"
                                    onChange={this.handleChange}
                                    value={this.state.result.phone}
                                />
                            </fieldset>
                        </Col>
                        <Col xl="4" lg="4">
                            <fieldset>
                                <label htmlFor="address">Adresse:</label>
                                <input
                                    type="text"
                                    name="address"
                                    onChange={this.handleChange}
                                    value={this.state.result.address}
                                />
                            </fieldset>
                        </Col>
                        <Col xl="4" lg="4">
                            <fieldset>
                                <label htmlFor="postcode">Code Postal:</label>
                                <input
                                    type="text"
                                    name="postcode"
                                    onChange={this.handleChange}
                                    value={this.state.result.postcode}
                                />
                            </fieldset>
                        </Col>
                        <Col xl="4" lg="4">
                            <fieldset>
                                <label htmlFor="city">Ville:</label>
                                <input
                                    type="text"
                                    name="city"
                                    onChange={this.handleChange}
                                    value={this.state.result.city}
                                />
                            </fieldset>
                        </Col>
                        <Col xl="4" lg="4">
                            <fieldset>
                                <label htmlFor="country">Pays:</label>
                                <input
                                    type="text"
                                    name="country"
                                    onChange={this.handleChange}
                                    value={this.state.result.country}
                                />
                            </fieldset>
                        </Col>
                        <Col xl="4" lg="4">
                            <fieldset>
                                <label htmlFor="description">Ma description:</label>
                                <input
                                    type="textarea"
                                    rows="5" cols="33"
                                    name="description"
                                    onChange={this.handleChange}
                                    value={this.state.result.description}
                                />
                            </fieldset>
                        </Col>
                    </div>
                </Container>
                <div className="not">
                    <div>
                        <Button type="submit" onClick={this.handleSubmit} className="button-login-submit">Valider les modifications</Button>
                    </div>
                </div>

            </section>
        )
    }
}
export default ProfilUpdate




