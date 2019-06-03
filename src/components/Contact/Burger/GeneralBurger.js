import React from 'react';
import Navbar from './Navbar';
import SideNav from './SideNav';
import Backdrop from './Backdrop';

class GeneralBurger extends React.Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    // this.setState({sideDrawerOpen: !this.state.sideDrawerOpen})
    this.setState((prevState) => {
      return{sideDrawerOpen: !prevState.sideDrawerOpen}
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render () {
    let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideNav />
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }
    return (
      <div style={{height: '100%'}}>
        <Navbar drawerClickHandler={this.drawerToggleClickHandler}/>
        {SideNav}
        <SideNav show={this.state.sideDrawerOpen}/>
        {backdrop}
      </div>
    );
  }
 
}

export default GeneralBurger;
