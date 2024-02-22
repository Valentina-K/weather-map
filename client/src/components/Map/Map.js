import { useRef, useCallback } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import "./Map.css";

import { mapThemeLight1, mapThemeDark } from "./Theme";

const containerStyle = {
  width: "940px",
  height: "650px",
  borderRadius: "12px",
  paddingBottom: "16px",
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset",
  marginBottom: "15px",
};

const defaultOptions = {
  panControl: true,
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  clickableIcons: false,
  keyboardShortcurts: false,
  scrollwheel: true,
  disableDoubleClickZoom: false,
  fullscreenControl: false,
  /* styles: mapThemeDark, */
};

export const Map = ({ center, onMapClick }) => {
  const mapRef = useRef(undefined);
  const onLoad = useCallback(function callback(map) {
    mapRef.current = map;
  }, []);
  const onUnmount = useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);

  const handleClick = (pos) => {
    onMapClick({ lat: pos.latLng.lat(), lng: pos.latLng.lng() });
  };

  return (
    <div className="container">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={defaultOptions}
        onClick={handleClick}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};
