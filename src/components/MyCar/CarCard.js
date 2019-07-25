import React from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import allTheActions from '../../actions'

import './CarCard.scss'
import Button from '../UI/Button/Button';

class CarCard extends React.Component {

    render() {
        const carData = this.props.car
        console.log(this.props.car)
        return (
            <div className="card-car">
                <div className="card-body card-car-info">
                    <i className="fas fa-car-alt card-car-icon"></i>
                    <div className="car-info-text">
                        <p className="car-info-title">{this.props.car.brand}</p>
                        <p className="car-info-subtitle">Immatriculation: {this.props.car.licencePlate}</p>
                    </div>
                </div>
                <div className="card-car-link">
                    <Link to="/mycardisplay" onClick={() => this.props.formAction.form(carData)} >
                        <Button text="Détails" />
                    </Link>
                </div>
            </div>
        )
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
export default connect(mapStateToProps, mapDispatchToProps)(CarCard)







