import React from "react";
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = () => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);

  return (
    <>
      <h1>All Posts</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
