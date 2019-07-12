import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

import Brand from './Brand/Brand'
import ResponsiveNavbar from './Burger/ResponsiveNavbar'
import Tab from './Tab/Tab'
import DropToggleItem from './DropToggle/DropToggleItem'

import './Header.scss'

class Header extends Component {
  state = {
    background: "",
    isTop: true
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      }
    });

    this.setState({
      background: this.props.background
    })
  }

  isPublic = (location) => {
    switch(location) {
      case "/mycar":
        return false
      case "/dashboard":
        return false
      case "/profil":
        return false
      case "/document":
        return false
      default:
        return true
    }
  }

  render() {
    const headerClass = this.state.background && this.state.isTop ? "header_header" : "header_header_white"

    const linkClass = this.state.background && this.state.isTop ? "header_link" : "header_link_black"

    const linkStatus = this.state.background && this.state.isTop ? "header_link_gold" : "header_link_black"
    console.log(this.state)
    console.log(this.props.pathname)
    return (
      <header className={headerClass}>
        <div className="burger-btn"><ResponsiveNavbar /></div>
        <NavLink exact to="/" className={this.state.background ? "header_link" : "header_link_black"}>
          <Brand background={this.state.background} isTop={this.state.isTop} />
        </NavLink>

        <div className="header_link_div">
          {this.isPublic(this.props.pathname) ? (
              <> 
                <NavLink to="/tracking" activeClassName="selected" className={linkClass} >
                  <Tab icon="map-marker-alt" tab="Tracking" />
                </NavLink>

                <NavLink to="/login" activeClassName="selected" className={linkClass} >
                  <Tab icon="user-tie" tab="Login" />
                </NavLink>

                <NavLink to="/status" activeClassName="selected" className={linkStatus} >
                  <Tab icon="user-plus" tab="Register" />
                </NavLink> 
                <NavLink exact to="/apropos" className={linkClass} >
                <Tab icon="fas fa-info-circle" tab="A propos" />
                </NavLink>
              </>
          ) : (<DropToggleItem />) 
          }
          
        </div>
      </header>
    )
  }
}
export default Header;