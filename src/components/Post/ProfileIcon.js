import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const ProfileIcon = () => {
  const { user, isAuthenticated} = useAuth0();

  return (
    isAuthenticated && (
      <div className="Compose__profile-picture" id="userProfile">
        <img className="tinyProfile" src={user.picture} alt="" />
      </div>
      
    )
  );
};

export default ProfileIcon;