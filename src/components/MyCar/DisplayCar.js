

import React, { Component } from 'react';
import Button from '../Button/Button';
import './DisplayCar.scss'

class DisplayCar extends Component {
      render() {
        // console.log(this.props)
        return (
            <div className="display-container">
                <h2>Ma voiture</h2>
                <p>description:</p> 
                <p>{this.props.description}</p>
                <p>maintenance:</p> 
                <p>{this.props.maintenance}</p>
                <p>leasing:</p> 
                <p>{this.props.leasing}</p>
                <p>brand:</p> 
                <p>{this.props.brand}</p>
                <p>model:</p>
                <p>{this.props.model}</p>
                <p>license:</p>
                <p>{this.props.license}</p>
                <p>kilometers:</p>
                <p>{this.props.kilometers}</p>
                <p>year:</p>
                <p>{this.props.year}</p>
                <p>color:</p>
                <p>{this.props.color}</p>
                <p>power:</p>
                <p>{this.props.power}</p>
                <p>color:</p>
                <p>{this.props.color}</p>
                <p>fuel:</p>
                <p>{this.props.fuel}</p>
                <p>description:</p>
                <p>{this.props.description}</p>
                <Button text="Modifier" />
            </div>

        );
    }
}

export default DisplayCar