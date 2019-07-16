import React, { Component } from 'react';
import PageHeader from '../components/Header/PageHeader/PageHeader';
import ProjectSection from '../components/ProjectSection/ProjectSection';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer'
import TrackingSection from "../components/TrackingSection/TrackingSection";
import Header from "../components/Header/Header";

class Home extends Component {
    state = { 

     }
    render() { 
        console.log(this.props.location)
        return ( 
            <div>
            <Header pathname={this.props.location.pathname} background={true}/>
            <PageHeader />
            <ProjectSection />
            <TrackingSection />
            <Contact />
            <Footer />
        </div>
         );
    }
}
 
export default Home