import React, { Component } from 'react';
import Copyright from "./Copyright/Copyright";
import ContactContainer from "./Contact/ContactContainer/ContactContainer";
import './Footer.scss'
import './Contact/Cards/ContactCard.scss'
import './Contact/ContactContainer/ContactContainer.scss'
import './Contact/Socials/SocialButton.scss'
import './Copyright/Copyright.scss'

class Footer extends Component {
  state = {}
  render() {
    return (
      <div className="Footer bg-black">
        <ContactContainer />
        <Copyright />
      </div>
    );
  }
}

export default Footer;