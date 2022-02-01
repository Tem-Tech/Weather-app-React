import React, { useState } from "react";
import { Dot } from "react-animated-dots";
import Conditions from "./condition";
import Forecast from "./forecast";
import axios from "axios";

export default function searchForm(props) {
  let [report, setReport] = useState({ ready: false });
  let [city, setCity] = useState("props.default");

  function weatherReport(response) {
    setReport({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      country: response.data.sys.country,
      minTemp: response.data.main.temp_min,
      maxTemp: response.data.main.temp_max
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function cityChange(event) {
    setCity(event.target.value);
  }
  function search() {
    let apiKey = "2f77a721f146c97e77d99956a2de9fe0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(weatherReport);
  }
  if (report.ready) {
    return (
      <div>
        <Conditions data={report} />
        <form id="city-search" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search City Here..."
            class="form-control"
            id="search-input"
            onChange={cityChange}
          />
          <input type="submit" value="🔍" className="form-btn" />
          <input type="submit" value="📌" className="form-btn" />
        </form>
        <Forecast coordinates={report.coordinates} />
      </div>
    );
  } else {
    return (
      <div>
        <h2>
          What is your city?{" "}
          <span role="img" aria-label="emoji">
            🧐
          </span>
        </h2>
        <h1>
          {" "}
          <Dot>.</Dot>
          <Dot>.</Dot>
          <Dot>.</Dot>
        </h1>
        <ul className="stats">
          <li>Description: </li>

          <li>Feels like: </li>

          <li>Humidity: </li>

          <li>Windsped: </li>
        </ul>
        <form id="city-search" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search City Here..."
            class="form-control"
            id="search-input"
            onChange={cityChange}
          />
          <input type="submit" value="🔍" className="form-btn" />
          <input type="submit" value="📌" className="form-btn" />
        </form>
      </div>
    );
  }
}
