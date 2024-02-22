import React from "react";

const Icons = ({ icons }) => {
  return (
    <ul className="Icons-list">
      <li key={0} className="Icons-list__item">
        {icons[0]}
      </li>
      <li key={1} className="Icons-list__item">
        {icons[1]}
      </li>
      <li key={2} className="Icons-list__item">
        {icons[2]}
      </li>
      <li key={3} className="Icons-list__item">
        {icons[3]}
      </li>
      <li key={4} className="Icons-list__item">
        {icons[4]}
      </li>
      <li key={5} className="Icons-list__item">
        {icons[5]}
      </li>
      <li key={6} className="Icons-list__item">
        {icons[6]}
      </li>
    </ul>
  );
};

export default Icons;
