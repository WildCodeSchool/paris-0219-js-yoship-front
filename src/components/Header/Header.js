import React, { Component } from "react";
import {NavLink } from 'react-router-dom';

import Brand from './Brand/Brand'
// import ContainerLink from "./ContainerLink/ContainerLink";
import Tab from './Tab/Tab'

import './Header.scss'

class Header extends Component{
  state = {
    background : true,
    isTop: true

  }
  componentDidMount () {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
          this.setState({ isTop })
      }
    });
  }

  whiteBackground = () => {
    this.setState({background : false}) 
  }

  pictureBackground = () => {
    this.setState({background : true})
  }
  
  render () {
    const headerClass = this.state.background && this.state.isTop? "header_header" : "header_header_white"

    const linkClass= this.state.background && this.state.isTop? "header_link" : "header_link_black"
    
    const linkRegister= this.state.background && this.state.isTop? "header_link_gold" : "header_link_black"

    return  (  
      <header className={headerClass}>
        <NavLink exact to="/" className={this.state.background? "header_link" : "header_link_black"} onClick={this.pictureBackground}>
          <Brand background={this.state.background} isTop={this.state.isTop}/>
        </NavLink>
      
        <div className="header_link_div">
          <NavLink to="/tracking" activeClassName="selected" className={linkClass} onClick={this.whiteBackground}>
            <Tab icon="map-marker-alt" tab="Tracking"/>
          </NavLink>
      
          <NavLink to="/login" activeClassName="selected" className={linkClass} onClick={this.whiteBackground}>
            <Tab icon="user-tie" tab="Login"/>
          </NavLink>
      
          <NavLink to="/register" activeClassName="selected" className={linkRegister} onClick={this.whiteBackground}>
            <Tab icon="user-plus" tab="Register"/>
          </NavLink>
          </div>
        
      </header>
    )
  }
}


export default Header