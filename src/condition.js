import React from "react";
import "./style.css";
export default function () {
  return (
    <div>
      <strong className="description" id="description">
        Sunny, clear sky
      </strong>{" "}
      <div className="weather-data">
        <br />
        <span id="temperature-high">8</span>
        <span>°| </span>
        <span id="temperature-low">
          <strong>10</strong>
        </span>
        <span>°</span>
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
