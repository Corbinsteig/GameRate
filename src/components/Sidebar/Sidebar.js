import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from '../Logout/Logout';
import LoginButton from '../Login/Login';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import './Sidebar.css'
import { NavLink } from 'react-router-dom';


const Sidebar = () => {

    return (  
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            GameRate
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink to={"/"} exact={true} activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="gamepad">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to={"/profile"} exact={true} activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
            </NavLink>
            <LoginButton/>
            <LogoutButton/>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;