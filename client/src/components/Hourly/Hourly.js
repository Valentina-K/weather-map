import React from "react";
import "./Hourly.css";
import Hours from "./Hours";
import Description from "./Description";
import Icons from "./Icons";
import Themperature from "./Themperature";

const Hourly = () => {
  return (
    <div className="hourly">
      <Hours />
      <Description />
      <Icons />
      <Themperature />
    </div>
  );
};

export default Hourly;
