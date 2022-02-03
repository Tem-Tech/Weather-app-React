import React from "react";
import "./style.css";
import ForecastDay from "./forecastDay";
export default function Predictions () {
  return (
    <div>
      <h3>This week...</h3>
      <div className="row">
        <div className="col-2">
          <ForecastDay />
        </div>
        <div className="col-2">
          <ForecastDay  />
        </div>
        <div className="col-2">
          <ForecastDay  />
        </div>
        <div className="col-2">
          <ForecastDay />
        </div>
        <div className="col-2">
          <ForecastDay />
        </div>
      </div>
    </div>
  );
}
