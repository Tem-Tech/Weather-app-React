import React, { useState } from "react";
import "./style.css";
export default function (props) {
  let [minTemp, setminTemp] = useState(props.minTemp);
  let [maxTemp, setmaxTemp] = useState(props.maxTemp);

  function fahrenheit(event) {
    event.preventDefault();

    setminTemp(`${Math.round((props.minTemp * 9) / 5 + 32)}`);
    setmaxTemp(`${Math.round((props.maxTemp * 9) / 5 + 32)}`);
  }
  function celcius(event) {
    event.preventDefault();
    setminTemp(props.minTemp);
    setmaxTemp(props.maxTemp);
  }
  return (
    <div>
      <strong className="description" id="description">
        Sunny, clear sky
      </strong>{" "}
      <div className="weather-data">
        <br />
        <span id="temperature-high">{minTemp}</span>
        <span>°| </span>
        <span id="temperature-low">
          <strong>{maxTemp}</strong>
        </span>
        <span>°</span>
      </div>
      <div>
        <a href="/" onClick={celcius}>
          °C /
        </a>
        <a href="/" onClick={fahrenheit}>
          {" "}
          °F
        </a>
      </div>
      <p>
        <ul className="stats">
          <li>
            Feels like: <span id="feel">6°</span>
            <span>°</span>{" "}
          </li>
          <li>
            Humidity: <span id="humidity"> 23</span>%
          </li>
          <li>
            windspeed: <span id="windspeed"> 0.5</span>km/hr{" "}
          </li>
        </ul>
      </p>
    </div>
  );
}
