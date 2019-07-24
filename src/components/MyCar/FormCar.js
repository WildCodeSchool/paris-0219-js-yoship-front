import React from 'react';
import axios from 'axios';
import { FormGroup, Label, Input, CardTitle, } from 'reactstrap';
import { Col, Container, } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import Button from '../Button/Button';
import './FormCar.scss';

const config = require('../../config/config')

class FormCar extends React.Component {
  state = {
    redirect: false,
    brand: "",
    color: "",
    description: "",
    fuel: "",
    horsepower: "",
    kilometers: "",
    leasing: "",
    license_plate: "",
    maintenance: "",
    model: "",
    model_year: "",
    fuelArray: ["essence", "diesel", "hybride", "electrique", "GPL"],
    colorArray: ["noir", "blanc", "gris foncé", "gris", "bordeaux", "bleu foncé", "bleu", "vert foncé", "vert", "marron", "beige", "orange", "jaune", "violet", "rose"],
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  fuelChange = e => {
    this.setState({ fuel: e.target.value });
  }

  colorChange = e => {
    this.setState({ color: e.target.value });
  }

  handleSubmit = e => {
    console.log(this.state)
    alert('Les caractéristiques de votre véhicule ont été prises en compte: ' + this.state.brand);
    e.preventDefault();
    const token = localStorage.getItem("token")
    const uuid = localStorage.getItem("uuid")
    const dataTosend = {
      brand: this.state.brand,
      color: this.state.color,
      description: this.state.description,
      fuel: this.state.fuel,
      horsepower: this.state.horsepower,
      kilometers: this.state.kilometers,
      licencePlate: this.state.license_plate,
      modelYear: this.state.model_year
    }

    axios.post(`http://localhost:${config.port}/users/${uuid}/cars`, (dataTosend),
      {
        headers: {
          'x-access-token': `${token}`
        }
      })
      .then(res => {
        const result = res.data
        console.log("response to axios Mycar", res)
        console.log(result);
      })
      .catch(err => {
        console.log(err)
      })
    this.setState({ redirect: true })
  }

  render() {

    const redirect = this.state.redirect;

    if (redirect) {
      return <Redirect to="/mycarprofil" />
    } else {
      return (
        <section className="register">
          <form className="car-container" onSubmit={this.handleSubmit}>
            <Col xl="12" lg="12">
              <CardTitle className="cardtitleinformation" icon="user-plus" ><h4> Ma voiture</h4></CardTitle>
            </Col>
            <Container>
              <div className="row align-items-center mb-4 mb-lg-5">
                <Col xl="6" lg="6">
                  <Label className="car-brand" htmlFor="car-brand">Marque :</Label>
                  <Input
                    required="required"
                    type="text"
                    name="brand"
                    id="car-brand"
                    placeholder="Sélectionnez la marque du véhicule"
                    value={this.state.brand}
                    onChange={this.handleChange}
                  />
                </Col>
                <Col xl="6" lg="6">
                  <Label className="car-license-plate" htmlFor="car-license-plate">Immatriculation :</Label>
                  <Input
                    required="required"
                    type="text"
                    name="license_plate"
                    id="car-license-plate"
                    placeholder="AA-000-AA"
                    value={this.state.license_plate}
                    onChange={this.handleChange}
                  />
                </Col>
                <Col xl="6" lg="6">
                  <Label className="car-kilometers" htmlFor="car-kilometers">Kilométrage :</Label>
                  <Input
                    required="required"
                    type="number"
                    name="kilometers"
                    id="car-kilometers"
                    placeholder="Renseignez le nombre de kilomètres du véhicule"
                    value={this.state.kilometers}
                    onChange={this.handleChange}
                  />
                </Col>
                <Col xl="6" lg="6">

                  <Label className="car-year" htmlFor="car-year">Année de mise en service :</Label>
                  <Input
                    required="required"
                    type="date"
                    name="model_year"
                    id="car-year"
                    onChange={this.handleChange}
                    value={this.state.model_year}
                  />
                </Col>
                <Col xl="6" lg="6">

                  <Label className="car-horsepower" htmlFor="car-horsepower">Puissance fiscale :</Label>
                  <Input
                    required="required"
                    type="number"
                    name="horsepower"
                    id="car-horsepower"
                    placeholder="0"
                    min="50"
                    max="999"
                    onChange={this.handleChange}
                    value={this.state.horsepower}
                  />
                </Col>
                <Col xl="6" lg="6">
                  <div className="FormCarCarburant">
                    <FormGroup>
                      <Label className="car-fuel" name="fuel">Carburant :</Label>
                      <Input type="select" name="select" id="exampleSelect">
                        <option>Essence</option>
                        <option>Diesel</option>
                        <option>Hybride</option>
                        <option>Electrique</option>
                        <option>GPL</option>
                      </Input>
                    </FormGroup>
                  </div>
                </Col>
                <Col xl="2" lg="4" className="colorcolor1" >
                  <div className="colorcolor">
                    <div id="purple">
                      <Label check />
                      <Input type="radio" name="radio1" onChange={this.colorChange} value="violet" />
                      <div className="car-purple"></div>violet
            </div>
                    <div id="black">
                      <Label check />
                      <Input type="radio" name="radio1" onChange={this.colorChange} value="noir" />
                      <div className="car-black"></div>noir
            </div>


                    <div id="dark-grey">
                      <Label check />
                      <Input type="radio" name="radio1" onChange={this.colorChange} value="gris foncé" />
                      <div className="car-dark-grey"></div>gris foncé
            </div>
                    <div id="grey">
                      <Label check />
                      <Input type="radio" name="radio1" onChange={this.colorChange} value="gris" />
                      <div className="car-grey"></div>gris
            </div>
                    <div id="blue">
                      <Label check />
                      <Input type="radio" name="radio1" onChange={this.colorChange} value="bleu" />
                      <div className="car-blue"></div>bleu
            </div>
                  </div>
                </Col>
                <Col xl="2" lg="4" className="colorcolor2">
                  <div className="colorcolor">
                    <div id="dark-blue">
                      <Label check />
                      <Input type="radio" name="radio1" onChange={this.colorChange} value="bleu foncé" />
                      <div className="car-dark-blue"></div>bleu foncé
            </div>
                    <div id="yellow">
                      <Label check />
                      <Input type="radio" name="radio1" onChange={this.colorChange} value="jaune" />
                      <div className="car-yellow"></div>jaune
            </div>
                    <div id="white">
                      <Label check />
                      <Input type="radio" name="radio1" onChange={this.colorChange} value="blanc" />
                      <div className="car-white"></div>blanc
            </div>
                    <div id="beige">
                      <Label check />
                      <Input type="radio" name="radio1" onChange={this.colorChange} value="beige" />
                      <div className="car-beige"></div>beige
            </div>
                    <div id="brown">
                      <Label check />
                      <Input type="radio" name="radio1" onChange={this.colorChange} value="marron" />
                      <div className="car-brown"></div>marron
            </div>
                  </div>
                </Col>
                <Col xl="4" lg="4" className="colorcolor3">
                  <div className="colorcolor">
                    <div id="dark-green">
                      <Label check />
                      <Input type="radio" name="radio1" onChange={this.colorChange} value="vert foncé" />
                      <div className="car-dark-green"></div>vert foncé
            </div>
                    <div id="green">
                      <Label check />
                      <Input type="radio" name="radio1" onChange={this.colorChange} value="vert" />
                      <div className="car-green"></div>vert
            </div>
                    <div id="bordeaux">
                      <Label check />
                      <Input type="radio" name="radio1" onChange={this.colorChange} value="bordeaux" />
                      <div className="car-bordeaux"></div>bordeaux
            </div>
                    <div id="red">
                      <Label check />
                      <Input type="radio" className="car-color-item" name="radio1" onChange={this.colorChange} value="red" />
                      <div className="car-red"></div>rouge
            </div>
                    <div id="orange">
                      <Label check />
                      <Input type="radio" className="car-color-item" name="radio1" onChange={this.colorChange} value="orange" />
                      <div className="car-orange"></div>orange
            </div>
                  </div>
                </Col>
                <Col xl="12" lg="12">
                  <div className="cardescriptionh1"   >
                    <Label className="car-description" htmlFor="car-description">Description :</Label>
                    <Input type="textarea" placeholder="Courte description de votre véhicule..." name="description" id="car-description" value={this.state.description} onChange={this.handleChange} />
                  </div>
                </Col>
              </div>
            </Container>
            <div className="MyFormCarsButton">
              <Button text="Valider" type="Submit" onClick={this.handleSubmit} />
            </div>
          </form>
        </section>
      );
    }
  }
}
export default FormCar
























