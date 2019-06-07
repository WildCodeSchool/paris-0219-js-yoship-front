import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faUserTie, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

import "./Tab.scss"

library.add(faMapMarkerAlt, faUserTie, faUserPlus)

const Tab = ({icon, tab}) => {
    return   (
      <div className= "header_tab">
        <FontAwesomeIcon icon={icon} /> {tab}
      </div>
    )
}


export default Tab