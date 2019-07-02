import React from 'react';
import './Questions.scss'

class Questions extends React.Component{
    
    render() {
        return (
            <section>
                <div className="Quetions-text">
                    <h1>Questions les plus féquentes ;</h1>
                    <p>Où est mon colis ?</p>
                    <p>Pour suivre votre envoie, il suffit de renseigner votre numéro de suivi en début de page.<br />
                       Ce numéro vous aura été communiqué par nos partenaires au moment de l'achat.
                    </p>
                    <p>Comment renvoyer mon colis ?</p>
                    <p>Pour renvoyer votre colis, merci d'entrer en contact avec le partenaire chez qui vous avez<br />
                    effectué votre achat. Le marchand étant en charge du service après-vente des articles.</p>
                    <p>Comment donner mon avis ?</p>
                    <p>Vous pouvez noter le membre YoPartner qui vous a livré dans les 24heures après<br />
                    la livraison. Vous pouvez également noter notre service grâce à nos différents comptes<br />
                    publics sur les réseaux, accessibles en cliquant sur les icônes en bas de la page.</p>
                </div>
            </section>
        )
    }
}

export default Questions;