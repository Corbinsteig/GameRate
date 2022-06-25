import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import PostDisplay from "./PostDisplay";
import axios from "axios";
import "./Post.css";
import { useAuth0 } from "@auth0/auth0-react";

const defaultDate = new Date();

const Post = () => {
  const [follow, setFollow] = useState([]);
  const [smPost, setSmPost] = useState([]);
  const { isAuthenticated } = useAuth0();

  const getPosts = () => {
    axios
      .get("http://localhost:4000/api/getAllPosts")
      .then((res) => setSmPost(res.data));
  };

  console.log(smPost);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/getFollow")
      .then((res) => setFollow(res.data));
    getPosts();
  }, []);

  const formik = useFormik({
    initialValues: {
      text: "",
      date: "",
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
        <h1>Write Something</h1>
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

            <input
              name="date"
              type="date"
              onChange={formik.handleChange}
              value={formik.values.date}
            ></input>
          </div>
          <button type="submit">Post</button>
        </form>
        <PostDisplay smPost={smPost} setSmPost={setSmPost} />
        <getPosts />
      </div>
    );
  } else {
    return (
        <h1>LOGIN REQUIRED</h1>
    )
  }
};

export default Post;
