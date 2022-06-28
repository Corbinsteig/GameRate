import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './ProfilePage.css'

const ProfilePage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="profilePageContainer">
        <div>
        <img classname="bigPicture" src={user.picture} alt={user.name} />
        </div>
        <h2 className="userName">{user.name}</h2>
        <p>{user.email}</p>
        <h1>Bio:</h1>
      </div>
      
    )
  );
};

export default ProfilePage;