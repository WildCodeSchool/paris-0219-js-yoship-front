import React from 'react';
import { Link } from 'react-router-dom';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import allTheActions from '../../actions'

import Button from '../Button/Button'

class CarCard extends React.Component {


    render () {
    
    const carData = this.props.car
    console.log(carData)
    return (
        <div>
            <p>{this.props.car.brand} {this.props.car.color}</p>
            <Link to="/mycardisplay"  onClick={() => this.props.formAction.form(carData)} >
            <button>Voir plus</button>
            </Link>
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
  
export default connect(mapStateToProps,mapDispatchToProps)(CarCard)
