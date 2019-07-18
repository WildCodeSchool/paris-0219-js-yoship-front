// import React, { Component } from "react";
// import { NavLink } from 'react-router-dom';

// // Components 

// import Brand from './Brand/Brand'
// import ResponsiveNavbar from './Burger/ResponsiveNavbar'
// import DriverNav from './Navigation/DriverNav'
// import PublicNav from './Navigation/PublicNav'

// // Style
// import './Header.scss'

// class Header extends Component {
//   state = {
//     background: "",
//     isTop: true
//   }

//   componentDidMount() {
//     document.addEventListener('scroll', () => {
//       const isTop = window.scrollY < 100;
//       if (isTop !== this.state.isTop) {
//         this.setState({ isTop })
//       }
//     });

//     this.setState({
//       background: this.props.background
//     })
//   }

//   isPublic = (location) => {
//     switch(location) {
//       case "/mycar":
//         return false
//       case "/dashboard":
//         return false
//       case "/profil":
//         return false
//       case "/document":
//         return false
//       default:
//         return true
//     }
//   }

//   render() {
//     const headerClass = this.state.background && this.state.isTop ? "header_header" : "header_header_white"

//     const linkClass = this.state.background && this.state.isTop ? "header_link" : "header_link_black"

//     const linkStatus = this.state.background && this.state.isTop ? "header_link_gold" : "header_link_black"

//     return (
//       <header className={headerClass}>
//         <div className="burger-btn"><ResponsiveNavbar /></div>
//         <NavLink exact to="/" className={this.state.background ? "header_link" : "header_link_black"}>
//           <Brand background={this.state.background} isTop={this.state.isTop} />
//         </NavLink>
//         <div className="header_link_div">
//           <NavLink to="/tracking" activeClassName="selected" className={linkClass} onClick={this.whiteBackground}>
//             <Tab icon="map-marker-alt" tab="Tracking" />
//           </NavLink>

//           <NavLink to="/login" activeClassName="selected" className={linkClass} onClick={this.whiteBackground}>
//             <Tab icon="user-tie" tab="Login" />
//           </NavLink>

//           <NavLink to="/status" activeClassName="selected" className={linkStatus} onClick={this.whiteBackground}>
//             <Tab icon="user-plus" tab="Register" />
//           </NavLink> 
//           <NavLink exact to="/apropos"  activeClassName="selected" className={linkClass} onClick={this.whiteBackground}>
//           <Tab icon="info-circle" tab="A propos" />
//           </NavLink>

//           <NavLink exact to="/questions"  activeClassName="selected" className={linkClass} onClick={this.whiteBackground}>
//           <Tab icon="question-circle" tab="FAQ" />
//           </NavLink>

// <DropToggleItem />

  
          
//         </div>
//       </header>
//     )
//   }
// }
// export default Header;
import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { Container } from 'reactstrap';


// Components 
import Brand from './Brand/Brand'
import BurgerButton from "./Burger/BurgerButton";
import DriverNav from './Navigation/DriverNav'
import PublicNav from './Navigation/PublicNav'

// Style
import './Header.scss'



class Header extends Component {
    state = {
        background: "",
        isTop: true,
        sideDrawerOpen: false,
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

    drawerClickHandler = () => {
        this.setState((prevState) => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen }
        });
    };

    isPublic = (location) => {
        switch (location) {
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

        return (
            <header className={headerClass}>
                <NavLink exact to="/" className={this.state.background ? "header_link" : "header_link_black"}>
                    <Brand background={this.state.background} isTop={this.state.isTop} />
                </NavLink>
                <div className={this.state.sideDrawerOpen ? "side-nav" : "header_link_div"}>
                    {this.isPublic(this.props.pathname) ? (
                        <PublicNav linkClass={linkClass} linkStatus={linkStatus} />
                    ) : (
                            <DriverNav linkClass={linkClass} />
                        )
                    }
                </div>
                <div className="burger-btn">
                    <BurgerButton click={this.drawerClickHandler} />
                </div>
            </header>
        )
    }
}
export default Header;
