import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

// Packages
import axios from 'axios'

// Components
import Footer from '../components/Footer/Footer'


class Dashboard extends Component {
    state = {
        authorized: false,
        loading: true
    }

    componentDidMount = () => {

      // Getting localStorage data
      const token = localStorage.getItem("token")
      const uuid = localStorage.getItem("uuid")

      if (this.state.loading) {
        axios({
          method: 'Get',
          url: `http://localhost:3023/users/${uuid}`, 
           headers: {
             'x-access-token': `${token}`,
           },
          })
          .then(res => {
            console.log(res)
            this.setState({
              loading: false,
              authorized: true,
              name: res.data[0].name
            })
          })
          .catch(error => {
            console.log(error);
            this.setState({
              loading: false,
              authorized: false
            })
          })
        }
      }

    render() { 
        const { authorized, name, loading } = this.state;

        if (authorized && !loading) {
          return (
              <div>
                  <p>Dashboard !</p>
                  <p>{name}</p>
                  <Footer />
              </div>
            );
        } else {
            return < Redirect to="/login" />
        }

    }
}
 
export default Dashboard;