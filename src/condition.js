import React, { useState } from "react";
import "./style.css";
export default function (props) {
  let [temp, setTemp] = useState(props.temperature);

  function fahrenheit(event) {
    event.preventDefault();

    setTemp(`${Math.round((props.minTemp * 9) / 5 + 32)}`);
    setTemp(`${Math.round((props.maxTemp * 9) / 5 + 32)}`);
  }
  function celcius(event) {
    event.preventDefault();
    setTemp(props.minTemp);
  }
  return (
    <div>
      <strong className="description" id="description">
        Sunny, clear sky
      </strong>{" "}
      <div className="weather-data">
        <br />
        <span id="temperature-high">{props.minTemp}</span>
        <span>°| </span>
        <span id="temperature-low">
          <strong>{props.maxTemp}</strong>
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
