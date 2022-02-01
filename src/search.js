import React, { useState } from "react";
import { Dot } from "react-animated-dots";
import axios from "axios";

export default function searchForm() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [temperature, setTemperature] = useState("");
  const [minTemp, setMinTemp] = useState("");
  const [maxTemp, setMaxTemp] = useState("");
  const [description, setDescription] = useState("");
  const [wind, setWind] = useState("");
  const [humidity, setHumidity] = useState("");
  const [icon, setIcon] = useState("");
  const [report, displayReport] = useState(false);

  function weatherReport(response) {
    displayReport(true);
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setWind(response.data.wind.speed);
    setHumidity(response.data.main.humidity);
    setIcon(response.data.weather[0].icon);
    setCountry(response.data.sys.country);
    setMinTemp(response.data.main.temp_min);
    setMaxTemp(response.data.main.temp_max);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "2f77a721f146c97e77d99956a2de9fe0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(weatherReport);
  }
  function cityChange(event) {
    setCity(event.target.value);
  }
  if (report) {
    return (
      <div>
        {report && (
          <div>
            <h1>
              {city}, {country}
            </h1>
            <ul className="stats">
              <li>
                <img
                  src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                  alt={description}
                />
              </li>
              <div className="weather-data">
                <span id="temperature-high">{Math.round(minTemp)}</span>
                <span>°| </span>
                <span id="temperature-low">
                  <strong>{Math.round(maxTemp)}</strong>
                </span>
                <span>°</span>
              </div>

              <li>Description: {description}</li>

              <li>Feels like: {Math.round(temperature)}°C</li>

              <li>Humidity: {humidity}%</li>

              <li>Windsped: {Math.round(wind)}km/hr</li>
            </ul>
          </div>
        )}
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
