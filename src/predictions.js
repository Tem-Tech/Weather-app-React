import React from "react";
import "./style.css";
import ForecastDay from "./forecastDay";
export default function () {
  return (
    <div>
      <h3>This week...</h3>
      <div className="row">
        <div className="col-2">
          <ForecastDay day="Sun" min="10" max="17" index="02" />
        </div>
        <div className="col-2">
          <ForecastDay day="Mon" min="10" max="17" index="50" />
        </div>
        <div className="col-2">
          <ForecastDay day="Tue" min="10" max="17" index="01" />
        </div>
        <div className="col-2">
          <ForecastDay day="Wed" min="10" max="17" index="09" />
        </div>
        <div classsName="col-2">
          <ForecastDay day="Thu" min="10" max="17" index="02" />
        </div>
      </div>
    </div>
  );
}
