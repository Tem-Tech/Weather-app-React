import React from "react";
import "./style.css";
import Location from "./city";
export default function () {
  return (
    <div>
      <div className="Header">
        <h1>Currently in </h1>
        <Location />
      </div>

      <div />
    </div>
  );
}
