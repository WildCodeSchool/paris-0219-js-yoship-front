
import React from 'react';
import { Col, Container, Button } from 'reactstrap';
import axios from 'axios'
import { validatorAlpha, validatorMail, validatorDate, validatorNum, validatorEmpty } from '../../ValidatorForm/ValidatorForm';
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
            this.setState({redirect: true})            
    }
    render() {
        const redirect = this.state.redirect;

if (redirect) {    
    return <Redirect to="/dashboard"/>

}
        else if (this.state.loading) {
            return (<div>Loading</div>)

        } else {

            return (
                <section id="register" className="register">
                    <Container>
                        <div className="row align-items-center mb-4 mb-lg-5">
                            {/* <form onSubmit={this.handleSubmit}> */}

                                <Col xl="4" lg="4">
                                    <fieldset>
                                        <label htmlFor="firstname">Prénom :</label>
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
                                    <fieldset>
                                        <label htmlFor="name">Nom :</label>
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
                                    <fieldset>
                                        <label htmlFor="pseudo">Pseudo :</label>
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
                                    <fieldset>
                                        <label htmlFor="mail">Mail :</label>
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
                                    <fieldset>
                                        <label htmlFor="dateOfBirth">Date de naissance :</label>
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
                                    <fieldset>
                                        <label htmlFor="phone">Téléphone :</label>
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
                                    <fieldset>
                                        <label htmlFor="address">Adresse:</label>
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
                                    <fieldset>
                                        <label htmlFor="postcode">Code Postal:</label>
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
                                    <fieldset>
                                        <label htmlFor="city">Ville:</label>
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
                                    <fieldset>
                                        <label htmlFor="country">Pays:</label>
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
                                    <fieldset>
                                        <label htmlFor="description">Description:</label>
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
                            
                            {/* </form> */}
                        </div>
                    </Container>
                    <div className="MyCarsButton">
                            <Button type="submit" onClick={this.handleSubmit} className="MyProfilUpdateButton">Valider les modifications</Button>
                    </div>
                    <div className="not">
                        <div>

                        </div>
                    </div>

                </section>
            )
        }
    }
}




export default ProfilUpdate