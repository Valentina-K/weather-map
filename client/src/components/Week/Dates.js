import React from "react";

const Dates = ({ dates }) => {
  return (
    <ul className="dates-list">
      <li key={1}>{dates[0]}</li>
      <li key={2}>{dates[1]}</li>
      <li key={3}>{dates[2]}</li>
      <li key={4}>{dates[3]}</li>
      <li key={5}>{dates[4]}</li>
      <li key={6}>{dates[5]}</li>
      <li key={7}>{dates[6]}</li>
    </ul>
  );
};

export default Dates;
