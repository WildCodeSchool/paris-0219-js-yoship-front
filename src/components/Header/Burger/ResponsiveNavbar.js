import React from 'react';

import Navbar from './Navbar';
import SideNav from './SideNav';
import './ResponsiveNavbar.scss';


class ResponsiveNavbar extends React.Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    });
  };

  render() {

    return (
      <div>
        <header className="toolbar">
          <SideNav show={this.state.sideDrawerOpen} drawerClickHandler={this.drawerClickHandler} />
          <nav className="toolbar_navigation">
            <Navbar drawerClickHandler={this.drawerClickHandler} />
          </nav>
        </header>
      </div>
    );
  }

}

export default ResponsiveNavbar;
