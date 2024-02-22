import React from "react";
import "./DaysOfWeek.css";

const DaysOfWeek = () => {
  return (
    <ul className="days-list">
      <li key="1" className="days-item">
        Mon
      </li>
      <li key="2" className="days-item">
        Tue
      </li>
      <li key="3" className="days-item">
        Wed
      </li>
      <li key="4" className="days-item">
        Thu
      </li>
      <li key="5" className="days-item">
        Fri
      </li>
      <li key="6" className="days-item">
        Sat
      </li>
      <li key="7" className="days-item">
        Sun
      </li>
    </ul>
  );
};

export default DaysOfWeek;
