import express from "express";
import dotenv from "dotenv";
import { ConvertFromUnixTimestamp } from "./utils/utils.js";
//import navigator from "Navigator";
const app = express();
dotenv.config();
const dateNow = ConvertFromUnixTimestamp(1705996283);
//https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=process.env.WEATHER_API_KEY
//const position = Geolocation.getCurrentPosition();

app.listen(8800, () => {
  console.log("Server started on the port 8800 ", dateNow);
  /* navigator.geolocation.getCurrentPosition((position) => {
    console.log(position.coords.latitude, position.coords.longitude);
  }); */
});
app.get("/backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});
