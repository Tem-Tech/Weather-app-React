import React from "react";
import Location from "./city";
import Conditions from "./condition";
import Icon from "./icons";
export default function () {
  return (
    <div>
      <div className="Header">
        <h1>Currently in </h1>
        <Location />
        <Icon />
        <Conditions />
      </div>

      <div />
    </div>
  );
}
