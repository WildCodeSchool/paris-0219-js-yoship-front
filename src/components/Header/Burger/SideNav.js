// import React from 'react';
// import './SideNav.scss';
// import {NavLink } from 'react-router-dom';
// import Tab from '../Tab/Tab';

// const SideNav = ({show, drawerClickHandler}) => {
//     let drawerClass = show? 'side-drawer open' : 'side-drawer';

//     return (
        
//     <nav className={drawerClass}>
//         <ul>
//             <li>
//                 <NavLink to="/tracking" onClick={drawerClickHandler} >
//                     <Tab icon="map-marker-alt" tab="Tracking"/>
//                 </NavLink>
//             </li>
//             <li>
//                 <NavLink to="/login" onClick={drawerClickHandler} >
//                     <Tab icon="user-tie" tab="Login"/>
//                 </NavLink>
//             </li>
//             <li>
//                 <NavLink to="/register" onClick={drawerClickHandler}>
//                     <Tab icon="user-plus" tab="Register"/>
//                 </NavLink>
//             </li>
//         </ul>
//     </nav>
//     )
// };

// export default SideNav;