import React, { Component } from "react"
import DashBoard from '../components/DashBoard/DashBoard'
import Footer from '../components/Footer/Footer'
import Header from "../components/Header/Header"

class HomeDashboard extends Component {
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


