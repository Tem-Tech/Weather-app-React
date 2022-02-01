import React from "react";

export default function forecastDay(props) {
  function maxTemp() {
    let temperature = Math.round();
    return `${temperature}°`;
  }
  function minTemp() {
    let temperature = Math.round();
    return `${temperature}°`;
  }
  function day() {
    let date = new Date(props.dt * 100 - props.timezone * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="col-2">
      <div className="forecast-date">{day()}</div>
      <img
        src={`http://openweathermap.org/img/wn/${props.key}d@2x.png`}
        height="35px"
        alt="icon"
      />
      <div className="forecast-temperatures">
        <span className="minTemperature">{props.min}º</span>|
        <span>
          <strong>{props.max}º</strong>
        </span>
      </div>

      <div>
        <div className="WeatherForecast-day">{day()}</div>
        <div>
          <span>{minTemp()}º</span>|
          <span>
            <strong>{maxTemp()}º</strong>
          </span>
        </div>
      </div>
    </div>
  );
}
