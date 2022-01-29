import React from "react";
import "./style.css";
import Forecast from "./forecast";
export default function () {
  return (
    <div>
      <div className="row">
        <div className="col-2">
          <Forecast day="Sun" min="10" max="17" index="02" />
        </div>
        <div className="col-2">
          <Forecast day="Mon" min="10" max="17" index="50" />
        </div>
        <div className="col-2">
          <Forecast day="Tue" min="10" max="17" index="01" />
        </div>
        <div className="col-2">
          <Forecast day="Wed" min="10" max="17" index="09" />
        </div>
        <div classsName="col-2">
          <Forecast day="Thu" min="10" max="17" index="02" />
        </div>
      </div>
    </div>
  );
}
