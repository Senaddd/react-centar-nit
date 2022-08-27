import React, { useEffect } from "react";
import { useState } from "react";
import PostItem from "./PostItem";
import "./PostList.css";

const PostList = (props) => {
  const [number, setNumber] = useState(0);
  const [users, setUser] = useState([]);

  const getUser = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setUser(json);
      });
  };

  const randomNumber = () => {
    setNumber(Math.floor(Math.random() * 100) - 0);
  };
  useEffect(() => {
    getUser("");
  }, []);

  return (
    <div className="container">
      <h1>Post List</h1>
      <h1>Posts Items</h1>
      {users.map((user) => {
        return (
          <PostItem key={user.id} title={user.title} description={user.body} />
        );
        //   <p className="description">
        //     Title : {user.title} <br></br> <br></br> Description:
        //     {user.body} ,
        //   </p>
      })}
    </div>
  );
};

export default PostList;
