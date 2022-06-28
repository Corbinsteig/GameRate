import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import './ProfilePage.css'
import Followers from "../Followers/Followers";

const ProfilePage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [smFollow, smSetFollow] = useState([])

  const getFollowers = () => {
    axios
    .get("http://localhost:4000/api/getFollow")
    .then((res) => smSetFollow(res.data));
  }
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/getFollow")
      .then((res) => smSetFollow(res.data));
    getFollowers();
  }, []);
  

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="profilePageContainer">
        <div>
        <img className="bigPicture" src={user.picture} alt={user.name} />
        </div>
        <h2 className="userName">{user.name}</h2>
        <p className="userEmail">{user.email}</p>
        <h1>Followers</h1>
        <Followers smFollow={smFollow} smSetFollow={smSetFollow}/>
      </div>
      
    )
  );
};



export default ProfilePage;