import "./CryptoForm.css";
import CryptoCard from "./TrecaKomp";

const Crypto = [
    { id: 0, name: "Ethereum", price: 1700 },
  ];

export default function CryptoForm(name,price) {
  return (
    <div classname="Crypto-Form">

      <h2>CryptoListItem</h2>

      <p ></p>
      <p>{Crypto.price}</p>
      <button>X</button>
    </div>
  );
}
