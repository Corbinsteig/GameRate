import React from "react";

const Followers = (props) => {
    const {smFollow, setFollow} = props;

    return (smFollow.map((username, index) => (
      <section key={index}>
        <span>{username.username}</span>
      </section>
    )))
}

export default Followers