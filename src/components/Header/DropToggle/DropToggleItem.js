import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import Tab from '../Tab/Tab'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, } from 'reactstrap';
import './DropToggleItem.scss'
class Dropmenu extends Component {
    state = {
        background: true,
        isTop: true
    }
    render() {
        return (
            <UncontrolledDropdown >

                <DropdownToggle >
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
                        <NavLink to="/document">  
                            <DropdownItem >
                                Mes documents
                  </DropdownItem>
                  </NavLink>
                            <DropdownItem>
                                statistique financiére
                  </DropdownItem>
                            <DropdownItem divider />
                            <NavLink exact to="/questions" >
                <DropdownItem>
                         Questions les plus fréquentes
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
