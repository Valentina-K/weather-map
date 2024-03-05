import { Map } from "./Map/Map";
import { Preloader } from "./Preloader/Preloader";
import Week from "./Week/Week";
import { useJsApiLoader } from "@react-google-maps/api";
import { PlacesAutocomplete } from "./Autocomplete/Autocomplete";
import "./LeftBlock.css";

const MAP_KEY = process.env.REACT_APP_MAP_KEY;
const libraries = ["places"];
const LeftBlock = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: MAP_KEY,
    libraries,
  });

  return (
    <div className="wrapContainer">
      <div className="searchContainer">
        <PlacesAutocomplete isLoaded={isLoaded} />
      </div>
      {isLoaded ? <Map /> : <Preloader />}
      <Week />
    </div>
  );
};

export default LeftBlock;
