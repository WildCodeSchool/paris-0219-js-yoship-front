import React, { Component } from 'react';

// Components imports
import ContactCard from '../Cards/ContactCard';
import SocialButton from '../Socials/SocialButton';

// CSS imports
import './ContactContainer.scss'

class ContactContainer extends Component {
    state = {  }
    render() { 
        return (
          <div className="contact-section">
            <div className="contact-container">
              <ContactCard
                logo="fas fa-map-marked-alt"
                title="ADDRESS"
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
                title="PHONE"
                description="+33 6 69 36 27 94"
              />
            </div>
            <div className="contact-container social">
              <SocialButton link="#" icon="fab fa-twitter" />
              <SocialButton link="#" icon="fab fa-facebook-f" />
              <SocialButton link="#" icon="fab fa-github" />
            </div>
          </div>
        );
    }
}
 
export default ContactContainer;