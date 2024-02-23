import env from "react-dotenv";

const MAP_KEY = env.REACT_APP_MAP_KEY;
export function getAddressFromCoordinates(position) {
  const { lat, lng } = position;
  console.log(lat);
  return new Promise((resolve, reject) => {
    fetch(
      "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
        lat +
        "," +
        lng +
        "&key=" +
        MAP_KEY
    )
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === "OK") {
          resolve(responseJson?.results?.[0]?.address_components);
          //resolve(responseJson?.results?.[0]?.formatted_address);
        } else {
          reject("not found");
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}
