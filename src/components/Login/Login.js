import React, {useState} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  CDBSidebarMenuItem,
} from 'cdbreact';
import LogoutButton from "../Logout/Logout";
import { NavLink } from 'react-router-dom';


const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  if (isAuthenticated){
  return (
    // <NavLink exat to = '/'>
    //   <CDBSidebarMenuItem icon="sign-out-alt" onClick={() => logout({ returnTo: window.location.origin })}>Log Out</CDBSidebarMenuItem>
    // </NavLink>
    <LogoutButton/>
  )
  } else {
  return ( 
    <NavLink exact to ='/'>
    <CDBSidebarMenuItem icon="sign-in-alt"  onClick={() => loginWithRedirect()}>Log In</CDBSidebarMenuItem>
    </NavLink>
)};
  }



export default LoginButton;