import express from "express";
import dotenv from "dotenv";
//import navigator from "Navigator";
const app = express();
dotenv.config();
//https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}
//const position = Geolocation.getCurrentPosition();

app.listen(8800, () => {
  console.log("Server started on the port 8800");
  /* navigator.geolocation.getCurrentPosition((position) => {
    console.log(position.coords.latitude, position.coords.longitude);
  }); */
});
