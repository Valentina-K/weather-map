import React, { useCallback, useReducer } from "react";
import env from "react-dotenv";
import { Map } from "./Map/Map";
import { initialPosition, reducer } from "../store/store";
import Week from "./Week/Week";
import { useJsApiLoader } from "@react-google-maps/api";
import { PlacesAutocomplete } from "./Autocomplete/Autocomplete";
import "./LeftBlock.css";

const MAP_KEY = env.REACT_APP_MAP_KEY;
const libraries = ["places"];
const LeftBlock = () => {
  const [state, dispatch] = useReducer(reducer, initialPosition);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: MAP_KEY,
    libraries,
  });

  const onPlaceSelect = useCallback(({ lat, lng }) => {
    dispatch({
      type: "current",
      payload: { lat: lat, lng: lng },
    });
  }, []);
  return (
    <div className="wrapContainer">
      <div className="searchContainer">
        <PlacesAutocomplete isLoaded={isLoaded} onSelect={onPlaceSelect} />
      </div>
      {isLoaded ? <Map center={state} /> : <p>Hi</p>}
      {/* <Week /> */}
    </div>
  );
};

export default LeftBlock;
