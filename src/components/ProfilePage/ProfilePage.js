import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import './ProfilePage.css'
import Followers from "../Followers/Followers";


// export const Bio = () => {
//   const [message, setMessage] = useState("");
//   return (
//     <textarea 
//       name="message"
//       value={message} 
//       onChange={e => setMessage(e.target.value)}>
//     </textarea>
//   )
// }



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
      <img className="bigPicture" src={user.picture} alt="./photo.jpg" />
      </div>
      <h2 className="userName">{user.name}</h2>
      <p className="userEmail">{user.email}</p>
      <h1 className="bio">Bio</h1>
      <div class="form-group">
    <label for="exampleFormControlTextarea1"></label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" defaultValue=" My name is Corbin Steig and I am a 23 year old Web Developer who enjoys playing and rating videogames! Follow me for my takes">
      
    </textarea>
    </div>
   
    
      <button className="followersButton" onClick={handleClick}>followers</button>
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