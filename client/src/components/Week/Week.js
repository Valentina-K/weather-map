import React from "react";
import "./Week.css";
import DaysOfWeek from "./DaysOfWeek";
import Dates from "./Dates";
import Icons from "./Icons";
import Themperatures from "./Themperatures";

const Week = () => {
  return (
    <div className="week">
      <DaysOfWeek />
      <Dates />
      <Icons />
      <Themperatures />
    </div>
  );
};

export default Week;
