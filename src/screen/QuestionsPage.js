import React, { Component } from 'react';
import Footer from '../components/Footer/Footer';
import Header from "../components/Header/Header";
import Questions from '../components/Monprofil/Questions/Questions';

class QuestionsPage extends Component {
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