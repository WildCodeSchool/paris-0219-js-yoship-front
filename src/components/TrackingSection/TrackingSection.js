import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'

import Button from '../UI/Button/Button';
import "./TrackingSection.scss"
library.add(faMapMarkedAlt)

class TrackingSection extends Component {

  render() {
    return (
      <div className="container-section">
        <div className="tracking_section">
          <FontAwesomeIcon
            icon="map-marked-alt"
            className="logo_white"
            size="2x" />
          <h2 className="text-white">
            Track your YoShip package !
          </h2>
          <p className="text-white">
            As a privileged customer, you can track your package by the traking number received after your purchase and know the course of the approved driver.
          </p>
          <form action="/" method="get" className="form_inline">
            <label className="hidden" htmlFor='trackNumber'></label>
            <input type="text" placeholder="Enter your tracking number..." className="form_control" />
            <Button text="LET'S SEE !" />
          </form>
        </div>
      </div>
    )
  }
}


export default TrackingSection





