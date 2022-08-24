import { useState } from "react";
import "./Weather.css";

const WeatherApp = () => {
  let [weather, setWeather] = useState(0);
  let [description,setDescription] = useState(0);

  function descriptionSet () {
    setDescription((description = <p>hladno je</p>))

  }
    
  function updateWeather() {
    setWeather((weather = Math.floor(Math.random() * 50) - 20));

  }

//   const getBackgroundColor = () => {
//     let color;
//     if (value === 0) {
//         color = '';
//     } else if (value >= 1 && value < 25) {
//         color = 'red';
//     } else if (value >= 25 && value < 50) {
//         color = 'orange';
//     } else if (value >= 50 && value < 90) {
//         color = 'yellow';
//     } else if (value >= 90) {
//         color = 'green';
//     }
//     return color;
// };



  return (
    <div className="kartica">
      <p>{weather}</p>
      <p>Kartica</p>
      <button onClick={() => updateWeather()}>Refresh temp</button>

      <button onClick={() => descriptionSet()}>X</button>

        <p>{description}</p>
    </div>
  );
};

export default WeatherApp;
