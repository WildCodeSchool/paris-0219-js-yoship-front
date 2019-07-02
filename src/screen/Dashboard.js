import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

// Packages
import axios from 'axios'

// Components
import Footer from '../components/Footer/Footer'


class Dashboard extends Component {
    state = {
        authorized: false
    }

    componentDidMount = () => {
        const token = localStorage.getItem("token")
        const uuid = localStorage.getItem("uuid")

        axios({
          method: 'Get',
          url: `http://localhost:3031/users/${uuid}`, 
           headers: {
             'x-access-token': `${token}`,
           },
          })
          .then(res => {
            console.log(res)

            this.setState({
              authorized: true,
              name: res.data[0].name
            })
          })
          .catch(error => {
            console.log(error);
            this.setState({
              authorized: false
            })
          })
      }

    render() { 
        const { authorized, name } = this.state;

        if (!authorized) {
            return <p>This page is protected, you need to be <NavLink to="/login" className="link">logged in</NavLink> to view it</p>;
        }

        return (
            
            <div>
                <p>Dashboard !</p>
                <p>{name}</p>
                <Footer />
            </div>

          );
    }
}
 
export default Dashboard;