import React from "react";

export default function ForecastDay(props) {
  function maxTemp() {
    let htemperature = Math.round();
    return `${htemperature}°`;
  }
  function minTemp() {
    let ltemperature = Math.round();
    return `${ltemperature}°`;
  }
  function day() {
    let date = new Date();
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
        <span className="minTemperature">${Math.round(props.daily)}º</span>|
        <span>
          <strong>{Math.round()}º</strong>
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
