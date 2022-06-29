import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import PostDisplay from "./PostDisplay";
import axios from "axios";
import "./Post.css";
import { useAuth0 } from "@auth0/auth0-react";

const Post = () => {
  const [follow, setFollow] = useState([]);
  const [smPost, setSmPost] = useState([]);
  const { isAuthenticated } = useAuth0();


  const getPosts = () => {
    axios
      .get("http://localhost:4000/api/getAllPosts")
      .then((res) => setSmPost(res.data));
  };


  useEffect(() => {
    axios
      .get("http://localhost:4000/api/getFollow")
      .then((res) => setFollow(res.data));
    getPosts();
  }, []);

  const formik = useFormik({
    initialValues: {
      text: "",

    },
    onSubmit: async (values) => {
      axios
        .post("http://localhost:4000/api/addPost", values)
        .then((res) => getPosts());
      console.log(values);
    },
  });
  if (isAuthenticated) {
    return (
      <div className="App__content">
        <form onSubmit={formik.handleSubmit} id="post-form">
          <div id="input">
            <input
              name="text"
              type="text"
              placeholder="post something"
              onChange={formik.handleChange}
              value={formik.values.text}
              autocomplete="off"
            ></input>
          </div>
          <button id="postButton" type="submit">Post</button>
        </form>
        <PostDisplay smPost={smPost} setSmPost={setSmPost} />
        <getPosts />
      </div>
    );
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
  }
};

export default Post;
