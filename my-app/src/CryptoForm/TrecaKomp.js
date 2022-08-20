import React, { useState } from "react";
import CryptoList from "./CrpytoForm";


const Cryptolist = [
  { id: 0, name: "Ethereum", value: 1700 },
  { id: 1, name: "Bitcoin", value: 22000 },
  { id: 2, name: "Cardano", value: 0.465},
  { id: 3, name: "Dodgecoin", value: 0.071},
];

const CryptoForm = () => {
    const [cryptoList, setCryptoList] = useState(CryptoList);
    const [userData, setUserData] = useState({
        name: "",
        value: "",
    })
}




export default function CryptoCard() {

    const [crypto, setCryptoList] = useState(Cryptolist);

  


  return (
    <div className="Crypto-border">
    
    <h1>   Crypto Form  </h1>
      <button
        onClick={() =>
          setCryptoList((prev) => [
            ...prev,
            { id: Math.random(), name: "Nova Valuta", price: 300 },
          ])    
        }
      >
        ADD
      </button>
      {crypto.map((e) => (
        <div key={e.id}>
          <CryptoList name={e.name} price={e.value  } />
        </div>
      ))}
    </div>
  );
}
