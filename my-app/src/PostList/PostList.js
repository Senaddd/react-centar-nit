import React, { useEffect } from "react";
import { useState } from "react";

const PostList = (props) => {
  const [number, setNumber] = useState(0);
  const [user, setUser] = useState({});

  const getUser = (title) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${title}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setUser(json);
      });
  };



  useEffect(() => {
    getUser("");
  }, []);

  return (
    <div className="container">
      <button
        onClick={() => {
          setNumber(Math.random());
        }}
      >
        Press Me
      </button>
      {number}
      {number}
      <button
        onClick={() => {
          getUser("");
        }}
      >
        Klikni mene
      </button>
    </div>
  );
};

export default PostList;
