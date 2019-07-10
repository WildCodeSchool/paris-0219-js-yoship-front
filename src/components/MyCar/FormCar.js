import React from 'react';
import { Form, Label, Input, CustomInput } from 'reactstrap';
import Button from '../Button/Button';
import './FormCar.scss';

class FormCar extends React.Component {
  state = {
    maintenance: '',
    leasing: '',
    brand: '',
    model: '',
    license: '',
    kilometers: '',
    year: '',
    power: '',
    color: '',
    fuel: '',
    description: '',
};

handleChange = (event) => {
  this.setState({[event.target.name]: event.target.value});
}

// handleSubmit = e => {
//   e.preventDefault()
//   this.setState({
//    display: this.state.description,
//   })
// }

render() {
    console.log("ma props",this.props)
    return (
      <section>
        <Form className="car-container">
          
          <h2 className="car-title">Ma voiture</h2>
  
            <Label className="car-maintenance" for="car-maintenance">Entretien du véhicule :</Label>
            <Input
              type="date"
              name="maintenance"
              id="car-maintenance"
              placeholder="Renseignez ici la date du prochain entretien du véhicule"
              value={this.state.maintenance}
              onChange={this.handleChange}
            />
  
            <Label className="car-leasing" for="car-leasing">Détail leasing :</Label>
            <Input
              type="date"
              name="leasing"
              id="car-leasing"
              placeholder="Si le véhicule est en leasing, renseignez la date de fin de contrat"
              value={this.state.leasing}
              onChange={this.handleChange}
            />
      
            <Label className="car-brand" for="car-brand">Marque :</Label>
            <Input
              // required = "required"
              type = "text"
              name = "brand"
              id = "car-brand"
              placeholder = "Sélectionnez la marque du véhicule"
              value={this.state.brand}
              onChange={this.handleChange}
            />
  
            <Label className="car-model" for="car-model">Modèle :</Label>
            <Input
              // required = "required"
              type="text"
              name="model"
              id="car-model"
              placeholder="Sélectionnez la marque du véhicule"
              value={this.state.model}
              onChange={this.handleChange}
            />
  
            <Label className="car-license-plate" for="car-license-plate">Immatriculation :</Label>
            <Input
              // required = "required"
              type="text"
              name="license"
              id="car-license-plate"
              placeholder="AA-000-AA"
              value={this.state.license}
              onChange={this.handleChange}
            />
  
            <Label className="car-kilometers" for="car-kilometers">Kilométrage :</Label>
            <Input
              // required = "required"
              type="number"
              name="kilometers"
              id="car-kilometers"
              placeholder="Renseignez ici le nombre de kilomètres de votre véhicule"
              value={this.state.kilometers}
              onChange={this.handleChange}
            />
  
            <Label className="car-year" for="exampleSelect">Année de mise en service :</Label>
            <Input 
              type="select" 
              name="year" 
              id="exampleSelect" 
              //required = "required" 
              onChange={this.handleChange}
            >
              <option value="">Sélectionnez :</option>
              <option value={this.state.year}>2019</option>
              <option value={this.state.year}>2018</option>
              <option value={this.state.year}>2017</option>
              <option value={this.state.year}>2016</option>
              <option value={this.state.year}>2015</option>
              <option value={this.state.year}>2014</option>
              <option value={this.state.year}>2013</option>
              <option value={this.state.year}>2012</option>
              <option value={this.state.year}>2011</option>
              <option value={this.state.year}>2010</option>
              <option value={this.state.year}>2009</option>
              <option value={this.state.year}>2008</option>
              <option value={this.state.year}>2007</option>
              <option value={this.state.year}>2006</option>
              <option value={this.state.year}>2005</option>
              <option value={this.state.year}>2004</option>
              <option value={this.state.year}>2003</option>
              <option value={this.state.year}>2002</option>
              <option value={this.state.year}>2001</option>
              <option value={this.state.year}>2000</option>
            </Input>
  
            <Label className="car-horsepower" for="exampleSelect">Puissance Fiscale :</Label>
            <Input 
              type="select"
              name="power" 
              id="exampleSelect" 
              //required = "required"
              onChange={this.handleChange} 
            >
              <option value="">Sélectionnez :</option>
              <option value={this.state.power}>1</option>
              <option value={this.state.power}>2</option>
              <option value={this.state.power}>3</option>
              <option value={this.state.power}>4</option>
              <option value={this.state.power}>5</option>
              <option value={this.state.power}>6</option>
              <option value={this.state.power}>7</option>
              <option value={this.state.power}>8</option>
              <option value={this.state.power}>9</option>
              <option value={this.state.power}>10</option>
              <option value={this.state.power}>11</option>
              <option value={this.state.power}>12</option>
              <option value={this.state.power}>14</option>
              <option value={this.state.power}>15</option>
              <option value={this.state.power}>16</option>
            </Input>
  
            <Label className="car-color" for="car-color">Couleur du véhicule :</Label>
            <Input
              //required = "required"
              type="color"
              name="color"
              id="car-color"
              placeholder="color placeholder"
              value={this.state.color}
              onChange={this.handleChange}
            />
  
            <Label className="car-fuel" for="car-fuel" name="fuel" onChange={this.handleChange}>Carburant :</Label>
            <div className="car-bloc-fuels" >
              <CustomInput type="checkbox" id="car-gasoline" label="Essence" value={this.state.fuel}/>
              <CustomInput type="checkbox" id="car-diesel" label="Diesel" value={this.state.fuel}/>
              <CustomInput type="checkbox" id="car-hybrid" label="Hybride" value={this.state.fuel}/>
              <CustomInput type="checkbox" id="car-electric" label="Electrique" value={this.state.fuel}/>
              <CustomInput type="checkbox" id="car-gpl" label="GPL" value={this.state.fuel}/>
            </div>
  
            <Label className="car-description" for="car-description">Description :</Label>
            <Input type="textarea" name="description" id="car-description" value={this.state.description} onChange={this.handleChange}/>
  
            <Button type="submit" className="car-button" onClick={this.state} text="Valider"/>
        </Form>
      </section>
    );
  }
}

export default FormCar