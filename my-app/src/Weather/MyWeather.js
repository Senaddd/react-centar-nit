import { useState } from "react";
import "./Weather.css";

const WeatherApp = () => {
  let [weather, setWeather] = useState(0);

  function updateWeather() {
    setWeather(weather = Math.floor(Math.random() * 40 ) -20);

  }


  return (
    <div className="kartica">
      <p>{weather}</p>
      <p>Kartica</p>
      <button onClick={() => updateWeather()}>
        Klikni ovde da promenis temperaturu
      </button>
    </div>
  );
};

export default WeatherApp;
