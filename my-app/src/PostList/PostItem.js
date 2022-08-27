import React, { useReducer, useSyncExternalStore } from "react";
import PostList from "./PostList";
import getUser from "./PostList";

const PostItem = (user) => {
  return (
    <div className="title">
      <p>Title : {user.title}</p>
      <div>
        <p>Description : {user.description}</p>
      </div>
    </div>
  );
};

export default PostItem;
