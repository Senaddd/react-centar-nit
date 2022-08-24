import { useState } from "react";
import WeatherApp from "./MyWeather";

const MyWeather = () => {
 
const [weather, setWeather] = useState(false);



const handleClick = ( ) => {

    setWeather(true)
} 

return (

    <div>
        <div style={{
            backgroundImage: weather ? "url(https://img.freepik.com/premium-vector/ten-famous-cryptocurrency-coins-3d-flying-background_73426-142.jpg?w=2000)": ''  
            // backgroundImage: weather ? 
        }}
        > <button onClick={handleClick}>Change</button></div>
            <button onClick={handleClick(-20, 40)}>Press me </button>
    </div>

)
};



export default MyWeather;
