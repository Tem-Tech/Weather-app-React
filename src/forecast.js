import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDay from "./forecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

   useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    console.log(response);
    setForecast(response.data.daily);
    setLoaded(true);
  }
  function load(){
    let apiKey = "2f77a721f146c97e77d99956a2de9fe0"; 
    let lat = props.coordinates.lat; let lon = props.coordinates.lon;
    let apiUrl =`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={hourly,minutely,alerts}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

  }
  if (loaded) {
    
  return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 1) {
              return (
                <div className="col-4" key={index}>
                  <ForecastDay data={dailyForecast}/>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}