import React, { Component } from 'react';
import Questions from '../components/Monprofil/Questions/Questions';
import Footer from '../components/Footer/Footer';
import Header from "../components/Header/Header";

class QuestionsPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <Header pathname={this.props.location.pathname} />
            <Questions />
            <Footer />
        </div>
         );
    }
}
 
export default QuestionsPage;