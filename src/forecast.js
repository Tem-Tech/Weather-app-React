import React, { useState } from "react";
import axios from "axios";
import ForecastDay from "./forecastDay";
export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState("");

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    let apiKey = "2f77a721f146c97e77d99956a2de9fe0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&exclude={minutely,alerts}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  if (loaded) {
    return (
      <div className="row">
        {forecast.forEach(function (forecast, index) {
          if (index < 6) {
            return (
              <div>
                <ForecastDay key={index} data={forecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    load();

    return null;
  }
}
