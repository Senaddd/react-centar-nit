import { useState } from "react";
import WeatherApp from "./MyWeather";

const WeatherDescription = () => {

    let [description, setDescription] = useState()

    function updateDescription () {
        setDescription(description = "hladno je")
    }

    return (
        <><WeatherApp /><button className="btn" onClick={() => updateDescription()}><p>X {description}</p></button></>
    )
}

export default WeatherDescription;
