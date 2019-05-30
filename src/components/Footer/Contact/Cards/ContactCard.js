import React, { Component } from "react";

import "./ContactCard.scss";

class ContactCard extends Component {
  state = {};
  render() {
    return (
      <div className="card">
        <div className="card-body text-center">
          <i className={this.props.logo + " text-primary"} />
          <h4 className="card-title">{this.props.title}</h4>
          <hr />
          {this.props.title === "EMAIL" ? (
            <div className="card-subtitle">
              <a href={this.props.link}>{this.props.description}</a>
            </div>
          ) : (
            <div className="card-subtitle">{this.props.description}</div>
          )}
        </div>
      </div>
    );
  }
}

export default ContactCard;
