import React from "react";
import Icons from "./icons.js"

export default function ForecastDay(props) {
  console.log(props.data);
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];    
  }
  return (
    <div>
      <div className="forecast-day">{day()}</div>
      <Icons code={props.data.weather[0].icon}/>
      <div>
          <span>{minTemp()}º</span>|
          <span>
            <strong>{maxTemp()}º</strong>
          </span>
        </div>
      </div>
  );
}
