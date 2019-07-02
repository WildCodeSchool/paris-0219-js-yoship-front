import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

// Packages
import axios from 'axios'

// Components
import Footer from '../components/Footer/Footer'


class Dashboard extends Component {
    _isMounted = false;

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
            if (this._isMounted) {

            this.setState({
              authorized: true
            })
        }
          })
          .catch(error => {
            console.log(error);
            this.setState({
              authorized: false
            })
          })
      }

      componentWillUnmount() {
        this._isMounted = false;
      }

    render() { 
        const { authorized } = this.state;

        if (!authorized) {
          return  <Redirect to="/login" />
        }

        return (
            
            <div>
                <p>Dashboard !</p>
                <Footer />
            </div>

          );
    }
}
 
export default Dashboard;