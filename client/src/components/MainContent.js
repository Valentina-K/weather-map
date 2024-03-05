import { useEffect, useState } from "react";
import LeftBlock from "./LeftBlock";
import RightBlock from "./RightBlock";
import { useSelector, useDispatch } from "react-redux";
import { updateWeather } from "../redux/action";
import { getPlace, getIsData } from "../redux/selectors";
import { getWeatherData } from "../utils/weatherdata";
import { Preloader } from "./Preloader/Preloader";
import "./MainContent.css";

export const MainContent = () => {
  const dispatch = useDispatch();
  const place = useSelector(getPlace);
  const isData = useSelector(getIsData);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    getWeatherData(place)
      .then((result) => {
        dispatch(updateWeather(result));
        setIsLoaded(true);
      })
      .catch((error) => console.log(error.message));
  }, [place, dispatch]);

  return (
    <div className="main-block">
      {!isLoaded && <Preloader />}
      {isData && <LeftBlock />}
      {isData && <RightBlock />}
    </div>
  );
};
