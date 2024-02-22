import React from "react";
import "./Themperatures.css";

const Themperatures = ({ themperatures }) => {
  return (
    <ul className="themperature-list">
      <li key={0} className="themperature-list__item">
        {themperatures[0]}
      </li>
      <li key={1} className="themperature-list__item">
        {themperatures[1]}
      </li>
      <li key={2} className="themperature-list__item">
        {themperatures[2]}
      </li>
      <li key={3} className="themperature-list__item">
        {themperatures[3]}
      </li>
      <li key={4} className="themperature-list__item">
        {themperatures[4]}
      </li>
      <li key={5} className="themperature-list__item">
        {themperatures[5]}
      </li>
      <li key={6} className="themperature-list__item">
        {themperatures[6]}
      </li>
    </ul>
  );
};

export default Themperatures;
