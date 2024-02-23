import React, { useReducer } from "react";
import { initialPosition, reducer } from "../store/store";
import "./CityInfo.css";

const CityInfo = ({ themperature }) => {
  const [state, dispatch] = useReducer(reducer, initialPosition);
  const date = new Date();
  return (
    <div className="city-info">
      {<p className="city-info__date">{date.toLocaleDateString()}</p>}
      <h2 className="city-info__title">{state.place}</h2>
      {/* <p className="city-info__themp">{themperature}</p> */}
    </div>
  );
};

export default CityInfo;
