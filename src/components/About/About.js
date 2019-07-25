import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Col, } from 'reactstrap';
import Button from '../UI/Button/Button'

import './About.scss'

class About extends React.Component {
    render() {
        return (
            <section id="project" className="project-section bg-light">
                <Container>
                    <div className="row align-items-center mb-4 mb-lg-5">
                        <Col xl="6" lg="6">
                            <div className="aboutclass text-center text-lg-left">
                                <div className="titreabout">
                                    <h4>Statut de partenaire</h4>
                                </div>
                                <p className="text-black-50 mb-0">Devenir un membre priviligié YoPartner c'est rejoindre la révolution
                                   de la logistique des marques de luxe.
                                </p>
                                <p className="text-black-50 mb-0"><br />En rejoignant la communauté des YoPartner, il vous sera possible
                                    d'avoir accès aux clients de grandes maisons de luxe pour leur livrer un
                                    service clef en main.</p>
                                <p className="text-black-50 mb-0"><br />Indépendant, vous serez à même de gérer votre emploi du temps tout
                                    en développant vos compétences commerciales sur des produits
                                    d'exception.</p>
                                <p className="text-black-50 mb-0"><br />Ce métier dynamique et varié ne laisse aucune place à l'ennui.</p>
                            </div>
                        </Col>
                        <Col xl="6" lg="6">
                            <div className="aboutclass text-center text-lg-left">
                                <div className="titreabout">
                                    <h4>Une activité dynamique et variée</h4>
                                </div>
                                <p className="text-black-50 mb-0">Être partenaire avec Yoship Experience Delivery, c'est avoir accès à un parcours
                                   de formation certifiant, une maîtrise des standards qu'exige votre clientèle de
                                   luxe.
                                </p>
                                <p className="text-black-50 mb-0"><br />Vos challenges quotidiens, au contact de la clientèle finale des acteurs du luxe
                                    seront d'offrir une palette de services haut de gamme tels que:
                                </p>
                                <p className="text-black-50 mb-0"><br />Délivrer une prestation de livraison à domicile pour le compte de la
                                    clientèle finale des acteurs du luxe.
                                </p>
                                <p className="text-black-50 mb-0"><br />Fournir en cas de sollicitation du client une prestation de conseil à domicile
                                    d'une qualité équivalente au service que l'on retrouve en magasin.
                                </p>
                            </div>
                        </Col>
                    </div>
                </Container>
                <div className="buttonabout">
                    <NavLink to="/status">
                        <Button text="Inscris toi" />
                    </NavLink>
                </div>
            </section>
        )
    }
}
export default About;











