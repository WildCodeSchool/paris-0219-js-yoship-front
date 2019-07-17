import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Components
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

// Packages
import axios from 'axios'

class ConfirmMail extends Component {
    state = {
        isLoading: true
      }

    componentDidMount = () => {
        const token = this.props.match.params.token
        console.log(token);
        axios({
          method: 'PUT',
          url: `http://localhost:3031/confirmation/${token}`, 
           headers: {
             'x-access-token': `${token}`,
           },
          })
          .then(res => {
            this.setState({ isLoading: false })
            console.log(res.msg);
          })
          .catch(error => {
            console.log(error);
          })
      }

    render() { 
        return (
            <>
                <Header pathname={this.props.location.pathname} />
                    <div className='confirm'>
                        {this.state.isLoading
                        ?   <p>Loading...</p> 
                        :   <Link to='/Login'>
                                <p>Email succesfully confirmed !</p>
                                <button>Click to go to login</button>
                            </Link>
                        }
                    </div>
                <Footer />
            </>
          );
    }
}
 
export default ConfirmMail;