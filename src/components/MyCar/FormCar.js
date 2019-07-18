import React from 'react';
import axios from 'axios';
import { FormGroup, Label, Input, CardTitle, } from 'reactstrap';
import Button from '../Button/Button';
import { Col, Container, } from 'reactstrap';

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
      <section className="register">


<Col xl="12" lg="12">
                <CardTitle className="cardtitleinformation" icon="user-plus" ><h4> Ma voiture</h4></CardTitle>
              </Col>
          
                          <Container>
                          <div className="row align-items-center mb-4 mb-lg-5">


        {/* <Form className="car-container" onSubmit={this.handleSubmit}> */}

          

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
                            <Col xl="6" lg="6">

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
</Col>
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
 <Col xl="6" lg="6">  
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
 </Col>
 <Col xl="6" lg="6">  

 
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
</Col>
<Col xl="6" lg="6">  

          <Label className="car-year" htmlfor="car-year">Année de mise en service :</Label>
          <Input
            required = "required"
            type="date"
            name="model_year"
            id="car-year"
            onChange={this.handleChange}
            value={this.state.model_year}
          />
</Col>
<Col xl="6" lg="6">  

          <Label className="car-horsepower" htmlfor="car-horsepower">Puissance Fiscale :</Label>
          <Input
            required = "required"
            type="number"
            name="horsepower"
            id="car-horsepower"
            onChange={this.handleChange}
            value={this.state.horsepower}
          />
          </Col>
          {/* <Col xl="6" lg="6">  
          <Label className="car-fuel" name="fuel" onChange={this.handleChange}>Carburant :</Label>
          <div className="car-bloc-fuels" >
            {this.state.fuelArray.map(fuelList =>
              <Label check>
                <Input type="radio" className="car-fuel-item" name="radio2" onChange={this.fuelChange} value={fuelList} />
                {fuelList}
              </Label>)}
          </div>
         </Col> */}

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
              <Input type="radio" name="radio1" onChange={this.colorChange} value="purple" />
              <div className="car-purple"></div>violet
            </div>

          
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
              <Input type="radio" name="radio1" onChange={this.colorChange} value="dark-blue" />
              <div className="car-dark-blue"></div>bleu foncé
            </div>

<div id="yellow">
              <Label check />
              <Input type="radio" name="radio1" onChange={this.colorChange} value="yellow" />
              <div className="car-yellow"></div>jaune
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
            </div>
</Col>
<Col xl="4" lg="4" className="colorcolor3">  
<div className="colorcolor">   
<div id="dark-green">
              <Label check />
              <Input type="radio" name="radio1" onChange={this.colorChange} value="dark-green" />
              <div className="car-dark-green"></div>vert foncé
            </div>

<div id="green">
              <Label check />
              <Input type="radio" name="radio1" onChange={this.colorChange} value="green" />
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
          <Label className="car-description" htmlfor="car-description">Description :</Label>

          <Input type="textarea" name="description" id="car-description" value={this.state.description} onChange={this.handleChange} />
          </div>
          </Col>
          </div>
</Container>

          <div className="MyFormCarsButton">
            <Button text="Valider" />
          </div>



        {/* </Form> */}
 
      </section>
    );
            }
  }
}

export default FormCar