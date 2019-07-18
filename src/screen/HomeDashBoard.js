import React, { Component } from "react";
import Header from "../components/Header/Header";
import Footer from '../components/Footer/Footer'
import DashBoard from '../components/DashBoard/DashBoard'

class HomeDashboard extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <Header pathname={this.props.location.pathname} />
            <DashBoard />
            <Footer />
        </div>
         );
    }
}
 
export default HomeDashboard;


