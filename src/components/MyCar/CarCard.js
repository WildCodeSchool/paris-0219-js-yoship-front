import React from 'react';
import { Link } from 'react-router-dom';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import allTheActions from '../../actions'

import Button from '../Button/Button'

const CarCard = props => {
console.log({props})
    return (
        <div>
            <p>{props.brand} {props.color}</p>
            <Link to="/mycarprofil" >
            <button onClick={() => this.props.formAction.form({props})}>Voir plus</button>
            </Link>
        </div>
    )

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
