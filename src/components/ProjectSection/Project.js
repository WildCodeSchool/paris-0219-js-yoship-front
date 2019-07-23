import React from 'react';

import { Card, Container, Col } from 'reactstrap';

import './Project.scss'

const projectSection = (props) => {
    return (
        <section id="project" className="project-section bg-light">
            <Container>
                <div className="row align-items-center no-gutters mb-4 mb-lg-5">
                    <Col xl="8" lg="7">
                        <Card>
                            <iframe title="Car" className="video-fluid mb-3 mb-lg-0" src="https://www.youtube.com/embed/u9R8Mst7sk4?autoplay=0&showinfo=0&controls=1" allowFullScreen></iframe>
                        </Card>
                    </Col>
                    <Col xl="4" lg="5">
                        <div className="featured-text text-center text-lg-left">
                            <h4>Un conseil d'achat sur mesure à domicile</h4>
                            <p className="text-black-50 mb-0">YoShip est un concept innovant de livraison, de conseil et de vente à domicile, avec la même expérience d'achat que celle des marques de luxe.</p>
                            <p className="text-black-50 mb-0"><br /> Les conducteurs titulaires d'un permis disposent de leur propre espace de travail, regroupant tous les services nécessaires au suivi de leurs clients, à la gestion de leurs factures et à la livraison de nouvelles commandes.</p>
                            <p className="text-black-50 mb-0"><br /> Les marques et entreprises de luxe enregistrées ont également accès à leurs commandes avec des statistiques de ventes et des rapports, des chauffeurs agréés en fonction des livraisons à venir.</p>
                        </div>
                    </Col>

                </div>
            </Container>
        </section>
    );
};

export default projectSection;