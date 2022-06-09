import { useEffect, useState } from "react";
import axios from "axios";

const ShowWeather = () => {
  //     const [latitude,setLatitude]=useState(null);
  //   const [longitude,setLongitude]=useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        try {
          const response =
            await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=30ff5853a132af2994b1ae2899641d1a
          `);
          console.log(response.data);
          setWeather(() => response.data);
        } catch (error) {
          console.log(error);
        }
      });
    } else {
      console.log("geolocation is not available");
    }
  }, []);

  return (
    <div className="weather-wrapper">
      <p>
        <span>{(weather?.main.temp)}</span>
        <span>{weather?.name}</span>
      </p>
      <p>{weather?.weather[0].description}</p>
    </div>
  );
};

export { ShowWeather };
