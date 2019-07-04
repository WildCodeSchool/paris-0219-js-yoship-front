import React from 'react';
import  './About.scss'
import Button from '../Button/Button'

class About extends React.Component{
    
    render() {
        return (<section>
            <div className="about-text-1">
                <h3>Statut Partner</h3><br />
                <p>Devenir un membre priviligié YoPartner c'est rejoindre la révolution<br />
                   de la logistique des marques de luxe.
                </p>
                <p>En rejoignant la communauté des YoPartner, il vous sera possible<br />
                d'avoir accès aux clients de grandes maisons de luxe pour leurs livrer un<br />
                service clef en main.</p>
                <p>Indépendant vous serez à même de gerer votre emploi du temps tout<br />
                en développant vos compétences commerciales sur des produits<br />
                d'exception.</p>
                <p>Ce métier dynamique et varié ne laisse aucune place à l'ennuie.</p><br /><br /><br /><br />

                <h3>Une activité dynamique et varié</h3><br />
                <p>Être partenaire avec Yoship Experience Delivery, c'est avoir accès à un parcours<br />
                   de formation certifiant une maîtrise des standards qu'exige votre clientèle de<br />
                   luxe.
                </p>
                <p>Vos challenges quotidiens, au contact de la clientèle finale des acteurs du luxe<br />
                seront d'offrir une palette de services haut de gamme tels que:<br />
                </p>
                <p>Délivrer une prestation de livraison à domicile pour le compte de la <br />
                clientèle finale des acteurs du luxe.<br />
                </p>
                <p>Fournir en cas de sollicitation du client une prestation de conseil à domicile<br />
                d'une qualité équivalente au service que l'on retrouve en magasin.
                </p>
                <Button  text="DEVENEZ YOPARTNER"/>
            </div>
            
        </section>
        )
        }
    }

export default About;