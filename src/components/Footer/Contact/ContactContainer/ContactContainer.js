import React, { Component } from 'react';
import ContactCard from '../Cards/ContactCard';
import SocialButton from '../Socials/SocialButton';
import './ContactContainer.scss'

class ContactContainer extends Component {
  state = {}
  render() {
    return (
      <div className="contact-section">
        <div className="contact-container">
          <ContactCard
            logo="fas fa-map-marked-alt"
            title="ADRESSE"
            description="Paris"
          />
          <ContactCard
            logo="fas fa-envelope"
            title="EMAIL"
            link="mailto:yosemite.yoship@gmail.com"
            description="yosemite.yoship@gmail.com"
          />
          <ContactCard
            logo="fas fa-mobile-alt"
            title="TELEPHONE"
            description="+33 6 69 36 27 94"
          />
        </div>
        <div className="contact-container social">
          <SocialButton link="https://www.twitter.com" icon="fab fa-twitter" />
          <SocialButton link="https://www.facebook.com" icon="fab fa-facebook-f" />
          <SocialButton link="https://www.instagram.com" icon="fab fa-instagram" />
        </div>
      </div>
    );
  }
}

export default ContactContainer;