import React from 'react';
import { Container, Col, } from 'reactstrap';
import './Questions.scss'

class Questions extends React.Component {

    render() {
        return (
            <section id="project" className="project-section bg-light">
                <Container>

                    <div className="row align-items-center no-gutters mb-4 mb-lg-5">

                       
                            <Col xl="12" lg="12">
                            
                            <div className="titrequestions">  
                                <h4>Questions les plus féquentes:</h4>
                                </div>

                                
                            <h4>Où est mon colis ?</h4>
                            

                            <p className="text-black-50 mb-0">Pour suivre votre envoi, il suffit de renseigner votre numéro de suivi en début de page.<br />
                                Ce numéro vous aura été communiqué par nos partenaires au moment de l'achat.
                            </p><br />
                    
                            <h4>Comment renvoyer mon colis ?</h4>
                            
                            <p className="text-black-50 mb-0">Pour renvoyer votre colis, merci d'entrer en contact avec le partenaire chez qui vous avez<br />
                                effectué votre achat. Le marchand étant en charge du service après-vente des articles.</p><br />
                               
                            <h4>Comment donner mon avis ?</h4>
                           
                            <p className="text-black-50 mb-0">Vous pouvez noter le membre YoPartner qui vous a livré dans les 24heures après<br />
                                la livraison. Vous pouvez également noter notre service grâce à nos différents comptes<br />
                                publics sur les réseaux, accessibles en cliquant sur les icônes en bas de la page.</p>
             
                        </Col>
                        </div>
                    
                </Container>
            </section>
        );
    }
}

export default Questions;