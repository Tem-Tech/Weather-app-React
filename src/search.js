import React, { useState } from "react";
import axios from "axios";

export default function searchForm() {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("");
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
  return (
    <div>
      {report && (
        <ul className="stats">
          <li>
            <img
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              alt={description}
            />
          </li>
          <li>Description: {description}</li>

          <li>Feels like: {Math.round(temperature)}°C</li>

          <li>Humidity: {humidity}%</li>

          <li>Windsped: {Math.round(wind)}km/hr</li>
        </ul>
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
}
