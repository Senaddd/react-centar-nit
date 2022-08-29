import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const BASE_URL = "https://api.quotable.io";

export default function App() {
  const [authors, setAuthors] = useState([]);

  function getAuthors() {
    axios
      .get(`${BASE_URL}/authors?sortBy=quoteCount`)
      .then((res) => setAuthors(res.data.results));
  }
  useEffect(() => {
    getAuthors();
  }, []);
  return (
    <div className="card-container">
      {authors.length > 0 ? (
        <div>
          {authors.map((author) => (
            <div key={author.id}>
              <h4>{author.name}</h4>
              <h5>{author.description}</h5>
              <p>{author.bio}</p>
              <p> Quote count : {author.quoteCount}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
