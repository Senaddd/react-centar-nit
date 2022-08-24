import "./CryptoForm.css";
import { useState } from "react";
import CryptoCard from "./TrecaKomp";

const CryptoList = ({
  name,
  value,
  deleteCrypto,
  showMore,
  showMoreDescription,
}) => {
  return (
    <div className="crypto-list">
      <p>{name}</p>
      <p>${value}</p>
      <button className="btn2" onClick={() => showMore()}>
        {!showMoreDescription ? "Show More" : "Show less"}
      </button>

      {showMoreDescription && (
        <div className="crypto-more-info">
          {" "}
          <p className="crypto-info">
            Is {name} a good investment? Potentially. Because it's a , it should
            keep to a value of {value}, give or take a fraction of a cent.
            That's the point of it – it isn't meant to make or lose money in and
            of itself, but rather to be a stable store of value.
          </p>{" "}
        </div>
      )}
      <button className="btn2" onClick={deleteCrypto}>
        X
      </button>
    </div>
  );
};

export default CryptoList;
