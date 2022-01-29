import React from "react";
export default function forecast({ day, min, max, index }) {
  return (
    <div className="prediction">
      <div className="col-2">
        <div className="forecast-date">{day}</div>
        <img
          src={`http://openweathermap.org/img/wn/${index}d@2x.png`}
          height="35px"
          alt="icon"
        />
        <div className="forecast-temperatures">
          <span className="minTemperature">{min}º</span>|
          <span>
            <strong>{max}º</strong>
          </span>
        </div>
      </div>
    </div>
  );
}
