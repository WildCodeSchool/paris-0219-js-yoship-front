import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import Button from '../Button/Button';
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
            Suivre votre colis YoShip !
          </h2>
          <p className="text-white">
            En tant que client privilégié, vous pouvez suivre votre colis par le numéro de suivi reçu après votre achat et connaître le parcours du chauffeur agréé.
          </p>
          <form action="/" method="get" className="form_inline">
            <label className="hidden" htmlFor='trackNumber'></label>
            <input type="text" placeholder="Entrez votre numéro de suivi..." className="form_control" />
            <Button text="JETONS UN COUP D'ŒIL !" />
          </form>
        </div>
      </div>
    )
  }
}
export default TrackingSection







