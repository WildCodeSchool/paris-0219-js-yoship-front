import React from 'react';
import Navbar from './Navbar';
import './ResponsiveNavbar.scss';



class ResponsiveNavbar extends React.Component {

  render () {

    return (
      <div>
        <header className="toolbar"> 
          <nav className="toolbar_navigation">
            <Navbar />
          </nav>
        </header>
      </div>
    );
  }
 
}

export default ResponsiveNavbar;
