import React from "react";
import "./CityInfo.css";

const CityInfo = ({ city, date, themperature }) => {
  return (
    <div className="city-info">
      <p className="city-info__date">{date}</p>
      <h2 className="city-info__title">{city}</h2>
      <p className="city-info__themp">{themperature}</p>
    </div>
  );
};

export default CityInfo;
