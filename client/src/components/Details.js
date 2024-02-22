import React from "react";
import "./Details.css";
import Hourly from "./Hourly/Hourly";

const Details = ({
  feelslike,
  pressure,
  humidity,
  moonset,
  visibility,
  wind,
  rain,
  sunrise,
  sunset,
  moonrise,
}) => {
  return (
    <div className="details-list">
      <div className="details-list__item">
        <span>Feels like</span>
        <span>{feelslike}</span>
      </div>
      <div className="details-list__item">
        <span>Pressure</span>
        <span>{pressure}</span>
      </div>
      <div className="details-list__item">
        <span>Humidity</span>
        <span>{humidity}</span>
      </div>
      <div className="details-list__item">
        <span>Visibility</span>
        <span>{visibility}</span>
      </div>
      <div className="details-list__item">
        <span>Wind</span>
        <span>{wind}</span>
      </div>
      <div className="details-list__item">
        <span>Сhance of rain</span>
        <span>{rain}</span>
      </div>
      <div className="details-list__item">
        <span>Sunrise</span>
        <span>{sunrise}</span>
      </div>
      <div className="details-list__item">
        <span>Sunset</span>
        <span>{sunset}</span>
      </div>
      <div className="details-list__item">
        <span>Moonrise</span>
        <span>{moonrise}</span>
      </div>
      <div className="details-list__item">
        <span>Moonset</span>
        <span>{moonset}</span>
      </div>
      <Hourly />
    </div>
  );
};

export default Details;
