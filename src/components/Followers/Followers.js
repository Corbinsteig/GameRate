import React, { useState } from "react";
import './Followers.css'

const Followers = (props) => {
    const {smFollow, setFollow} = props;
    // const [style, setStyle] = useState('followerUsername')

    // const changeStyle = () => {
    //   setStyle('followerUsername2')
    // }

    return (smFollow.map((username, index) => (
      <section key={index}>
        <span className="followersEmail">{username.username}</span>
      </section>
    )))
}

export default Followers