import React, { Component } from 'react';
import TrackingSection from "../components/TrackingSection/TrackingSection";
import Footer from '../components/Footer/Footer'
import Header from "../components/Header/Header";

class Tracking extends Component {
    state = {  }
    render() { 
        return (
            <div>
            <Header pathname={this.props.location.pathname}/>
            <TrackingSection />
            <Footer />
        </div>
    
          );
    }
}
 
export default Tracking;

// const Tracking = () => {

//     return  (        

// )}


// export default Tracking;
