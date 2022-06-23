import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';


const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <NavLink exat to = '/'>
      <CDBSidebarMenuItem icon="sign-out-alt" onClick={() => logout({ returnTo: window.location.origin })}>Log Out</CDBSidebarMenuItem>
    </NavLink>
  );
};

export default LogoutButton;