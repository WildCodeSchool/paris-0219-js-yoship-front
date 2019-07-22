import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// Components
import Tab from '../Tab/Tab'
import LogoutButton from '../LogoutButton/LogoutButton';

import axios from 'axios'
const config = require("../../../config/config")

class AdminNav extends Component {
    state = {
      picture: "",
      firstname: ""
    }

    componentDidMount() {

      const token = localStorage.getItem("token")
      const uuid = localStorage.getItem("uuid")

      axios({
        method: 'Get',
        url: `http://localhost:${config.port}/users/${uuid}`,
        headers: {
          'x-access-token': `${token}`
        }
      }).then( res => {
          console.log(res.data[0])
          const data = res.data[0];
          this.setState({
            picture: data.picture,
            firstname: data.firstname
          })
      }).catch(error => {
          console.log(error)
      })
    }
   
    render() { 
      const { picture, firstname} = this.state

        return (
            <>
              <Tab icon="user-circle" tab={firstname} />
              <LogoutButton />
            </>
          );
    }
}
 
export default AdminNav;