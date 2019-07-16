import React from "react";

// Styling
import "./UnconfirmedMail.scss";
import YoshipLogo from "../../../assets/images/yoship-logo.png";

const UnconfirmedMail = ({ mail }) => {
    return (
        <div className="unconfirmed-container">
            <h1>Merci !</h1>
            <h2>Il ne vous reste plus qu'à vérifier votre email.</h2>
            <img src={YoshipLogo} alt="Yoship Logo" />
            <p>
                Avant de continuer sur Yoship, nous avons besoin que vous vérifiez votre
                adresse email.
            </p>
            <p>
                Un email contenant les instructions de vérification a été envoyé à
                l'adresse suivante: <b>{mail}</b>
            </p>
        </div>
    );
};

export default UnconfirmedMail;
