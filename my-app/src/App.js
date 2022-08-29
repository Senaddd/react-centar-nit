import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const BASE_URL = "https://api.quotable.io";

export default function App() {
  const [authors, setAuthors] = useState([]);
  const [page, setPages] = useState(0);

  function pagess() {
    setPages(page + 1);
  }

  function getAuthors(page) {
    axios
      .get(`${BASE_URL}/authors?sortBy=quoteCount&page=${page}`)

      .then((res) => setAuthors(res.data.results));
  }
  useEffect(() => {
    getAuthors(page);
  }, [page]);
  return (
    <div className="card-container">
      <button onClick={() => pagess()}>NextPage {page} / 100</button>

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
