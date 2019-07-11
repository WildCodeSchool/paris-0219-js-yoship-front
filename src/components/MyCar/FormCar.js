import React from 'react';
import axios from 'axios';
import { Form, Label, Input } from 'reactstrap';
import Button from '../Button/Button';
import { Redirect } from 'react-router-dom';
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
    //alert('Les caractéristiques de votre véhicule ont été prises en compte: ' + this.state.brand);
    e.preventDefault(); //bloquer le rafraichissement
    const token = localStorage.getItem("token")
    const uuid = localStorage.getItem("uuid")
    const dataTosend = {
      brand: this.state.brand,
      color: this.state.color,
      description: this.state.description,
      fuel: this.state.fuel,
      horsepower: this.state.horsepower,
      kilometers: this.state.kilometers,
      //leasing: this.state.leasing,
      licencePlate: this.state.license_plate,
      //maintenance: this.state.maintenance,
      //model: this.state.model,
      modelYear: this.state.model_year
    }

    axios.post(`http://localhost:${config.port}/users/${uuid}/cars`,(dataTosend),
      {headers: {
        'x-access-token': `${token}`
      }
    })

      .then(res => {
        const result = res.data
        console.log("response to axios Mycar", res)
        console.log(result);
      }) 
      this.setState({ redirect: true })
  }
 

  render() {    
    // console.log("ma props",this.state.brand)
    // console.log(this.state.color)
    const redirect = this.state.redirect;

    if (redirect) {
      return <Redirect to="/login" />

    } else {
    return (
      <section className="formCar">
        <Form className="car-container" onSubmit={this.handleSubmit}>

          <h2 className="car-title">Ma voiture {this.state.brand}</h2>

          {/* <Label className="car-maintenance" htmlFor="car-maintenance">Entretien du véhicule :</Label>
          <Input
            type="date"
            name="maintenance"
            id="car-maintenance"
            placeholder="Renseignez ici la date du prochain entretien du véhicule"
            value={this.state.maintenance}
            onChange={this.handleChange}
          /> */}

          {/* <Label className="car-leasing" htmlFor="car-leasing">Détail leasing :</Label>
          <Input
            type="date"
            name="leasing"
            id="car-leasing"
            placeholder="Si le véhicule est en leasing, renseignez la date de fin de contrat"
            value={this.state.leasing}
            onChange={this.handleChange}
          /> */}

          <Label className="car-brand" htmlFor="car-brand">Marque :</Label>
          <Input
            required = "required"
            type="text"
            name="brand"
            id="car-brand"
            placeholder="Sélectionnez la marque du véhicule"
            value={this.state.brand}
            onChange={this.handleChange}
          />

          {/* <Label className="car-model" htmlFor="car-model">Modèle :</Label>
          <Input
            required = "required"
            type="text"
            name="model"
            id="car-model"
            placeholder="Sélectionnez la marque du véhicule"
            value={this.state.model}
            onChange={this.handleChange} 
          />*/}

          <Label className="car-license-plate" htmlFor="car-license-plate">Immatriculation :</Label>
          <Input
            required = "required"
            type="text"
            name="license_plate"
            id="car-license-plate"
            placeholder="AA-000-AA"
            value={this.state.license_plate}

            onChange={this.handleChange}
          />

          <Label className="car-kilometers" htmlfor="car-kilometers">Kilométrage :</Label>
          <Input
            required = "required"
            type="number"
            name="kilometers"
            id="car-kilometers"
            placeholder="Renseignez ici le nombre de kilomètres de votre véhicule"
            value={this.state.kilometers}
            onChange={this.handleChange}
          />

          <Label className="car-year" htmlfor="car-year">Année de mise en service :</Label>
          <Input
            required = "required"
            type="date"
            name="model_year"
            id="car-year"
            onChange={this.handleChange}
            value={this.state.model_year}
          />

          <Label className="car-horsepower" htmlfor="car-horsepower">Puissance Fiscale :</Label>
          <Input
            required = "required"
            type="number"
            name="horsepower"
            id="car-horsepower"
            onChange={this.handleChange}
            value={this.state.horsepower}
          />

          <Label className="car-color" name="color" onChange={this.handleChange}>Couleur du véhicule :</Label>
          <div className="car-bloc-color">
            <div id="black">
              <Label check />
              <Input type="radio" name="radio1" onChange={this.colorChange} value="black" />
              <div className="car-black"></div>noir
            </div>

            <div id="dark-grey">
              <Label check />
              <Input type="radio" name="radio1" onChange={this.colorChange} value="dark-grey" />
              <div className="car-dark-grey"></div>gris foncé
            </div>

            <div id="grey">
              <Label check />
              <Input type="radio" name="radio1" onChange={this.colorChange} value="grey" />
              <div className="car-grey"></div>gris
            </div>

            <div id="white">
              <Label check />
              <Input type="radio" name="radio1" onChange={this.colorChange} value="white" />
              <div className="car-white"></div>blanc
            </div>

            <div id="beige">
              <Label check />
              <Input type="radio" name="radio1" onChange={this.colorChange} value="beige" />
              <div className="car-beige"></div>beige
            </div>

            <div id="brown">
              <Label check />
              <Input type="radio" name="radio1" onChange={this.colorChange} value="brown" />
              <div className="car-brown"></div>marron
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

            <div id="yellow">
              <Label check />
              <Input type="radio" name="radio1" onChange={this.colorChange} value="yellow" />
              <div className="car-yellow"></div>jaune
            </div>

            <div id="green">
              <Label check />
              <Input type="radio" name="radio1" onChange={this.colorChange} value="green" />
              <div className="car-green"></div>vert
            </div>

            <div id="dark-green">
              <Label check />
              <Input type="radio" name="radio1" onChange={this.colorChange} value="dark-green" />
              <div className="car-dark-green"></div>vert foncé
            </div>

            <div id="dark-blue">
              <Label check />
              <Input type="radio" name="radio1" onChange={this.colorChange} value="dark-blue" />
              <div className="car-dark-blue"></div>bleu foncé
            </div>

            <div id="blue">
              <Label check />
              <Input type="radio" name="radio1" onChange={this.colorChange} value="bleu" />
              <div className="car-blue"></div>bleu
            </div>

            <div id="purple">
              <Label check />
              <Input type="radio" name="radio1" onChange={this.colorChange} value="purple" />
              <div className="car-purple"></div>violet
            </div>

            <div id="pink">
              <Label check />
              <Input type="radio" name="radio1" onChange={this.colorChange} value="pink" />
              <div className="car-pink"></div>rose
            </div>
          </div>

          <Label className="car-fuel" name="fuel" onChange={this.handleChange}>Carburant :</Label>
          <div className="car-bloc-fuels" >
            {this.state.fuelArray.map(fuelList =>
              <Label check>
                <Input type="radio" className="car-fuel-item" name="radio2" onChange={this.fuelChange} value={fuelList} />
                {fuelList}
              </Label>)}
          </div>

          <Label className="car-description" htmlfor="car-description">Description :</Label>
          <Input type="textarea" name="description" id="car-description" value={this.state.description} onChange={this.handleChange} />

          <div className="car-button">
            <Button type="submit" onClick={this.handleRedirect} text="Valider" />
          </div>
        </Form>
      </section>
    );
            }
  }
}

export default FormCar