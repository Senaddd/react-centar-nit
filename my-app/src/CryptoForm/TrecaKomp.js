import React, { useState } from "react";
import CryptoList from "./CrpytoForm";

const listOfCrypto = [
  { id: 0, name: "Tether", value: 1.0},
  { id: 1, name: "BNB", value: 1650 },
  { id: 2, name: "Cardano", value: 295.42 },
  { id: 3, name: "Dogecoin", value: 0.071 },
  { id: 4, name: "XRP", value: 0.334 },
  { id: 5, name: "BNB", value: 291.39 },
  { id: 6, name: "Polkadot", value: 8.07 },
];



const CryptoForm = () => {
  const [cryptoList, setCryptoList] = useState(listOfCrypto);
  const [showMore, setShowMore] = useState();
  const [userData, setUserData] = useState({
    name: "",
    value: "",
  });

  const onAddCrypto = (event) => {
    event.preventDefault();
    setCryptoList((prev) => [
      ...prev,
      {
        id: Math.random().toString(36).slice(2, 7),
        name: userData.name,
        value: userData.value,
      },
    ]);
    setUserData({
      name: "",
      value: "",
    });
  };

  const deleteCrypto = (id) => {
    const newCryptoList = cryptoList.filter((value) => value.id !== id);
    setCryptoList(newCryptoList);
  };

  return (
    <div className="background">
      <h1 className="clist">Crypto</h1>
      <form className="crypto-form">
        <label htmlFor="CryptoName"></label>
        <input
          className="name"
          type="text"
          name="CryptoName"
          id="CryptoName"
          placeholder="Crypto Name"
          required
          value={userData.name}
          onChange={(event) =>
            setUserData((prev) => ({
              ...prev,
              name: event.target.value,
            }))
          }
        ></input>

        <label htmlFor="CryptoValue" className="crypto-values"></label>
        <input
          className="name"
          type="number"
          name="CryptoValue"
          id="CryptoValue"
          placeholder="Crypto Value"
          required
          value={userData.value}
          onChange={(event) =>
            setUserData((prev) => ({
              ...prev,
              value: event.target.value,
            }))
          }
        ></input>

        <button className="name" type="submit" onClick={onAddCrypto}>
          ADD
        </button>
      </form>

      <h4 className="clist-2">Crypto List Items</h4>

      {cryptoList.map((e) => (
        <CryptoList
          className="crypto-list"
          key={e.id}
          name={e.name}
          value={e.value}
          showMore={() =>
            setShowMore((prevValue) => {
              if(prevValue === e.id){  
                return null;
              } else {
                return e.id;
              }
            })
        }
        deleteCrypto={() => deleteCrypto(e.id)}
        showMoreDescription={showMore === e.id}
        />
        ))}
    </div>
  );
};

export default CryptoForm;

// const Cryptolist = [
//   { id: 0, name: "Ethereum", value: 1700 },
//   { id: 1, name: "Bitcoin", value: 22000 },
//   { id: 2, name: "Cardano", value: 0.465},
//   { id: 3, name: "Dodgecoin", value: 0.071},
// ];

// export default function CryptoCard() {

//   const onAddCrypto = (event) => {
//     event.preventDefault();
//     if (
//       userData.name.trim().length === 0 ||
//       userData.value.trim().length === 0
//     ) {
//       return alert("You must enter the name and value of Crypto.");
//     } else if (+userData.value <= 0) {
//       return alert("Value must be above 0.");
//     }
//     setCryptoList((prev) => [
//       ...prev,
//       {
//         id: Math.random().toString(36).slice(2, 7),
//         name: userData.name,
//         value: +userData.value,
//       },
//     ]);
//     setUserData({
//       name: "",
//       value: "",
//     });
//   };

//   const deleteCrypto = (id) => {
//     const newCryptoList = cryptoList.filter((value) => value.id !== id);
//     setCryptoList(newCryptoList);
//   };

//   return (
//     <div className="Crypto-border">

//     <h1>   Crypto Form  </h1>
//       <button
//         onClick={() =>
//           setCryptoList((prev) => [
//             ...prev,
//             { id: Math.random(), name: "Nova Valuta", price: 300 },
//           ])
//         }
//       >
//         ADD
//       </button>
//       {crypto.map((e) => (
//         <div key={e.id}>
//           <CryptoList name={e.name} price={e.id.value} />
//         </div>
//       ))}
//     </div>
//   );
// }
