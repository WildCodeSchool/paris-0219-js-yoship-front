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
                        <DropdownItem >
                                Ma voiture
                        </DropdownItem>
                        <DropdownItem >
                                Mes documents
                        </DropdownItem>
                        <DropdownItem>
                                Statistique financière
                        </DropdownItem>
                        <DropdownItem divider />
                        <NavLink exact to="/questions" >
                        <DropdownItem>
                                Questions les plus fréquentes
                        </DropdownItem>
                        </NavLink >
                        </div>
                    </DropdownMenu>
                </div>
            </UncontrolledDropdown>
        )
    }
}

export default Dropmenu;