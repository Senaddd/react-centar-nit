import React, { useReducer } from "react";
import PostList from "./PostList";
import getUser from "./PostList";

const PostItem = (id, title, description) => {
  return (
  <div className="title">
    <p>{title}</p>
    <p>{description}</p>
  </div> );
};

export default PostItem;
