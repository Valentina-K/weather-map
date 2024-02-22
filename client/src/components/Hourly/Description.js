import React from "react";
import "./Description.css";

const Description = ({ description }) => {
  return (
    <ul className="description">
      <li key={1}>{description[0]}</li>
      <li key={2}>{description[1]}</li>
      <li key={3}>{description[2]}</li>
      <li key={4}>{description[3]}</li>
      <li key={5}>{description[4]}</li>
      <li key={6}>{description[5]}</li>
      <li key={7}>{description[6]}</li>
      <li key={8}>{description[7]}</li>
      <li key={9}>{description[8]}</li>
      <li key={10}>{description[9]}</li>
    </ul>
  );
};

export default Description;
