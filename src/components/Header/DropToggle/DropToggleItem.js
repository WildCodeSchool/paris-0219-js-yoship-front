import React, { Component } from "react";
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
                            <DropdownItem >
                                Mon profil
                  </DropdownItem>
                            <DropdownItem >
                                Ma voiture
                  </DropdownItem>
                            <DropdownItem >
                                Mes documents
                  </DropdownItem>
                            <DropdownItem>
                                statistique financiére
                  </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                Questions les plus fréquentes
                  </DropdownItem>
                            <DropdownItem>
                                A propos
                  </DropdownItem>
                        </div>
                    </DropdownMenu>
                </div>
            </UncontrolledDropdown>
        )
    }
}

export default Dropmenu;