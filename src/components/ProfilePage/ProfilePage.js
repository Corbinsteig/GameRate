import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import './ProfilePage.css'
import Followers from "../Followers/Followers";


const ProfilePage = (props) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [smFollow, smSetFollow] = useState([])
  const {smPost, setSmPost} = props
  const [isShown, setIsShown] = useState(false)

  const handleClick = event => {
    setIsShown(current => !current)
  }

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
  

  if (isAuthenticated){
    return (
    <div className="profilePageContainer">
      <div>
      <img className="bigPicture" src={user.picture} alt={user.name} />
      </div>
      <h2 className="userName">{user.name}</h2>
      <p className="userEmail">{user.email}</p>
      <button className="followersButton" onClick={handleClick}>Followers</button>
      {isShown && (
      <Followers smFollow={smFollow} smSetFollow={smSetFollow}/>
      )}
    </div>
    )
  } else {
    return (
      <div classname="App__content">  
      <div className="loginContainer">
        <div className="authenticationErrorText">
        <h1 className="loginWarning">Authentication Error</h1>
        <h2 className="loginReq">Login required</h2>
        </div>
      </div>
      </div>
    )
};
}


export default ProfilePage;