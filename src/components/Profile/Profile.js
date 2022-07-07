import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Profile.css"

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div className="loading">Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="position-absolute top-0 end-0" id="userProfile">
        <div className="userProfilePicture">
        <img className="globalPicture" src={user.picture} alt="" />
        </div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
      
    )
  );
};

export default Profile;