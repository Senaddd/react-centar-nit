import React, { useState } from "react";
import CryptoForm from "./CrpytoForm";



export default function CryptoCard() {
  const [crypto, setCrypto] = useState(Crypto);

  return (
    <div className="Crypto-border">
      <button
        onClick={() =>
          setCrypto((prev) => [
            ...prev,
            { id: Math.random(), name: "Nova Valuta", price: 20000 },
          ])
        }
      >$</button>
       {crypto.map((crypt) => (
        <div key={crypt.id}>
          <CryptoForm
            name={crypt.name}
            points={crypt.price}
          />
        </div>
      ))}
    </div>
  );
}
