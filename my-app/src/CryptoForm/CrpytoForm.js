import "./CryptoForm.css";
import { useState } from "react";
import CryptoCard from "./TrecaKomp";





const CryptoList = ({ name, value, deleteCrypto , showMore, showMoreDescription}) => {
  return ( 
    <div className="crypto-list">
      <p>{name}</p>
      <p>${value}</p>
      <button className="btn2" onClick={() => showMore()}>
          {!showMoreDescription ? "Show More" : "Show less"}
        </button>
       
          {showMoreDescription && <div className="crypty"> <p>Good crypto value</p> </div>}
      <button className="btn2" onClick={deleteCrypto}>
        X
      </button>
    </div>
  );
};

export default CryptoList;
