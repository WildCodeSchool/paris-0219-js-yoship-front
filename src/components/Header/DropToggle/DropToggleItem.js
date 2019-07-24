import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, } from 'reactstrap';
import Tab from '../Tab/Tab'
import './DropToggleItem.scss'

class Dropmenu extends Component {
    state = {
        background: true,
        isTop: true
    }
    render() {
        return (
            <UncontrolledDropdown className="">
                <DropdownToggle className="button-login-submit" >
                    <Tab className="Setting" icon="user-cog" tab="Setting" />
                </DropdownToggle>
                <div className="dropdownmenudrop">
                    <DropdownMenu right>
                        <DropdownItem header className="dropdownitemheader">
                            Mon compte
                        </DropdownItem >
                        <DropdownItem divider />
                        <div className="dropdownitemdrop">
                            <NavLink to="/profil" >
                                <DropdownItem >
                                    Mon profil
                                 </DropdownItem>
                            </NavLink>
                            <NavLink to="/mycar">
                                <DropdownItem >
                                    Ma voiture
                            </DropdownItem>
                            </NavLink>
                            <NavLink to="/Document">
                                <DropdownItem >
                                    Mes documents
                                </DropdownItem>
                            </NavLink>
                            <DropdownItem>
                                Statistiques financières
                            </DropdownItem>
                            <DropdownItem divider />
                            <NavLink to="/">
                                <DropdownItem
                                    onClick={() => this.props}>
                                    Déconnexion
                            </DropdownItem>
                            </NavLink>
                        </div>
                    </DropdownMenu>
                </div>
            </UncontrolledDropdown>
        )
    }
}
export default Dropmenu;









