import React, { useState } from "react";
import "./App.css";
import DrugaKomp from "./DrugaKomp";
import TeamCard from "./TeamCard/TeamCard";
import CryptoForm from "./CryptoForm/CrpytoForm";
import TrecaKomp from "./CryptoForm/TrecaKomp"
import MyWeather from "./Weather//MyWeather"
import Weather from "./Weather/Weather";















// const DATA = [

// ];

// export default function App() {
//   const [array, setArray] = useState(DATA);

//   const generateNewWord = () => Math.random().toString(36).slice(2, 7);

//   const reverseArray = () => {

//     //kopija niza
//     const _array = [...array];
//     const reversed = _array.reverse();
//     setArray(reversed);
//   }

//   return (
//     <div className="card-container">
//       <h4>Random recenice</h4>
//       <button onClick={() => setArray((prev) => [generateNewWord(),...prev])}>
//         Dodaj random recenicu
//       </button>
//       <button onClick={reverseArray}>REVERSE recenice</button>
//       <ul>
//         {array.map((el) => (
//           <li key={el}> {el}</li>
//         ))}
//         ;
//       </ul>
//       <TeamCard />
     
//     </div>
//   );
// }

// export default function App() {
//   // const [name, setName] = React.useState("");
//   // const [email, setEmail] = React.useState("");
//   // const [hobi, setHobi] = React.useState("");

//   const [formValues, setFormValues] = useState({
//     name: "",
//     email: "",
//     hobi: "",
//     password: "",
//   })

//   return (
//     // <div className="card-container">
//       {/* <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           console.log(formValues);
//           console.log(`NAME: ${formValues.name}, EMAIL: ${formValues.email}, HOBI: ${formValues.hobi}, PASSWORD: ${formValues.password}`);
//         }}
//       >
//         <label htmlFor="html">Name</label>
//         <input
//           type="text"
//           id="html"
//           name="fav_language"

//           value={formValues.name}
//           onChange={(e) => setFormValues(prev => ({
//             ...prev,
//             name: e.target.value,
//           }))}
//         />
//         <br />
//         <label htmlFor="css">Email</label>
//         <input
//           type="text"
//           id="css"
//           name="fav_language"
//           value={formValues.email}
//           onChange={(e) => setFormValues(prev => ({
//             ...prev,
//             email: e.target.value,
//           }))}
//         />
//         <br />
//         <label htmlFor="javascript">Hobi</label>
//         <input
//           type="text"
//           id="javascript"
//           name="fav_language"
//           value={formValues.hobi}
//           onChange={(e) => setFormValues(prev => ({
//             ...prev,
//             hobi: e.target.value,
//           }))}
//         />
//         {/* <label htmlFor="javascript">passwordd</label>
//         <input className="pass"
//           type="password"
//           id="html"
//           name="fav_language"
//           value={formValues.password}
//           onChange={(e) => setFormValues(prev => ({
//             ...prev,
//             password: e.target.value,
//           }))}
//         /> */}
//         <br />
//         <br />
//         <input type="submit" defaultValue="Submit" />
//       </form>
//     </div> */}
//   );
// }

export default function App() {
  return (
  <MyWeather />
  // <CryptoForm />
  )

}