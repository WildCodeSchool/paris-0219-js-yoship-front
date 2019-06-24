import React, { Component } from "react";
import {NavLink } from 'react-router-dom';
import {Container} from 'reactstrap';


import Brand from './Brand/Brand'
import BurgerButton from "./Burger/BurgerButton";
// import SideNav from "./Burger/SideNav"
import Tab from './Tab/Tab'

import './Header.scss'


class Header extends Component{
  state = {
    background : true,
    isTop: true,
    sideDrawerOpen: false,
  }
  
  componentDidMount () {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
          this.setState({ isTop })
      }
    });
  }

  drawerClickHandler = () => {
    this.setState((prevState) => {
      return{sideDrawerOpen: !prevState.sideDrawerOpen}
    });
  };

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
                <Container>

          <NavLink exact to="/" onClick={this.pictureBackground}>
            <Brand background={this.state.background} isTop={this.state.isTop}/>
          </NavLink>

        
          <div className= {this.state.sideDrawerOpen?"side-nav":"header_link_div"}>
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

          <div className="burger-btn">
            <BurgerButton click={this.drawerClickHandler}/>
          </div>

          {/* <SideNav show={this.state.sideDrawerOpen} drawerClickHandler={this.drawerClickHandler} /> */}
          </Container>

        </header>
    )
  }
}


export default Header