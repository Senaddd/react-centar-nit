import { useState } from "react";
import "./Weather.css";
import WeatherDescription from "./Weather";

const WeatherApp = () => {
  const [weather, setWeather] = useState(0);
  const [background, changeBackground] = useState(0);
  const [hint, setHint] = useState("");

  const updateWeather = () => {
    const randomWeather = Math.floor(Math.random() * 50) - 20;
    setWeather(randomWeather);
    let bgColor = "";
    if (randomWeather < 4) {
      bgColor = "#77f";
      setHint("Mnogo je hladno, obucite se");
    } else if (randomWeather > 23) {
      bgColor = "#f77";
      setHint("Mnogo je toplo, ponesite sesir");
    } else {
      bgColor = "#7f7";
      setHint("");
    }
    document.getElementsByTagName("body")[0].style.backgroundColor = bgColor;
  };

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
    <>
      <div className="kartica">
        <p>{weather}°</p>
        {/* <p style={{ color: updateBackground ? 'red' : 'blue' }}>{weather}</p> */}
        <p>Kartica</p>
        <button onClick={() => updateWeather()}>Refresh temp</button>
      </div>
      <div className="text-center">
        {hint}
      </div>
    </>
  );
};

export default WeatherApp;
