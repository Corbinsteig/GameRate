import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from '../Logout/Logout';
import LoginButton from '../Login/Login';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import './Sidebar.css'
import { NavLink } from 'react-router-dom';


const Sidebar = () => {

    return (  
    <div id='sideBar'>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            GameRate
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink to={"/"} exact={true}
             activeClassName="activeClicked"
             style={({ isActive }) => 
                      (isActive ? {color: 'lightblue'} : {color: 'white'})}
             >
              <CDBSidebarMenuItem icon="gamepad">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to={"/profile"} exact={true} 
            activeClassName="activeClicked"
            style={({ isActive }) => 
                      (isActive ? {color: 'lightblue'} : {color: 'white'})}>
              <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
            </NavLink>
            <LoginButton/>
            {/* <LogoutButton/> */}
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;