import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import BurgerButton from "./Burger/BurgerButton";
import Brand from './Brand/Brand'
import DriverNav from './Navigation/DriverNav'
import PublicNav from './Navigation/PublicNav'
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
            case "/mycarprofil":
                return false
            case "/mycarpost":
                return false
            case "/mycardisplay":
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




