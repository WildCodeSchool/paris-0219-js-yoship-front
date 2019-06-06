import React from 'react';

import Navbar from './Navbar';
import SideNav from './SideNav';
import './ResponsiveNavbar.scss';
import BurgerButton from './BurgerButton';

class ResponsiveNavbar extends React.Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    // this.setState({sideDrawerOpen: !this.state.sideDrawerOpen})
    this.setState((prevState) => {
      return{sideDrawerOpen: !prevState.sideDrawerOpen}
    });
  };

  render () {
    let sideDrawer;
      if (this.state.sideDrawerOpen) {
        sideDrawer = <SideNav />
      }

    return (
      <div>
        <header className="toolbar"> 
          <SideNav show={this.state.sideDrawerOpen}/>
          <nav className="toolbar_navigation">
            <div className="toolbar_toggle-button">
              <BurgerButton click={this.props.drawerClickHandler}/>
            </div>
            <Navbar drawerClickHandler={this.drawerToggleClickHandler}/>
          </nav>
        </header>
      </div>
    );
  }
 
}

export default ResponsiveNavbar;
