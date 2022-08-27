import React, { useReducer, useSyncExternalStore } from "react";
import PostList from "./PostList";
import getUser from "./PostList";

const PostItem = (user, title, description) => {
  return (
    <div className="title">
      <p>
        {" "}
        Title: {user.title} , <br></br> {user.description}{" "}
      </p>
    </div>
  );
};

export default PostItem;
