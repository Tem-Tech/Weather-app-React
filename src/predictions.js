import React from "react";
import "./style.css";
import ForecastDay from "./forecastDay";
export default function () {
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
        <div classsName="col-2">
          <ForecastDay />
        </div>
      </div>
    </div>
  );
}
