import React ,{useRef, useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './BurgerButton.scss';
import {NavLink} from 'react-router-dom';
import Tab from './Tab';

library.add(faBars)

const BurgerButton = () => {
const node = useRef();
  
const [open, setOpen] = useState(false);
  
    const handleClick = e => {
      if (node.current.contains(e.target)) {
        return;
      }
      // outside click
      setOpen(false);
    };
  
    useEffect(() => {
      document.addEventListener("mousedown", handleClick);
  
      return () => {
        document.removeEventListener("mousedown", handleClick);
      };
    }, [open]);
    return (
        <div ref={node} className="essaiiii1">
          <button  className="toggle-button" onClick={e => setOpen(!open)}>
            <FontAwesomeIcon icon='bars' className="coloricon" />
          </button>
        {open && (
          
            <nav className="burger-button-nav">
               <ul className="ul-burger-nav">
                <li className="li-items-burger">
                  <NavLink to="/tracking" onClick={e => open(!setOpen)} >
                  <Tab icon="map-marker-alt" tab="Tracking"/>
                 </NavLink>
                </li>
                <li className="li-items-burger">
                <NavLink to="/login" onClick={e => open(!setOpen)}>
                    <Tab icon="user-tie" tab="Login"/>
                </NavLink>
                </li>
                <li className="li-items-burger">
                <NavLink to="/register" onClick={e => open(!setOpen)}>
                    <Tab icon="user-plus" tab="Register"/>
                </NavLink>
                </li>
               </ul>
            </nav>
         
      )}
        </div>
    )}

export default BurgerButton;