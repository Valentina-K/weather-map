import React from "react";
import CityInfo from "./CityInfo";
import Details from "./Details";

const RightBlock = () => {
  return (
    <div style={{ maxWidth: "370px" }}>
      <CityInfo />
      <Details />
    </div>
  );
};

export default RightBlock;
