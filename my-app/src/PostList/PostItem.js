import React, { useReducer, useSyncExternalStore } from "react";
import PostList from "./PostList";
import getUser from "./PostList";

const PostItem = (user) => {
  return (
    <div className="title">
      <p>Title : {user.title}</p>
      <p>Description : {user.description}</p>
    </div>
  );
};

export default PostItem;
