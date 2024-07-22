import React from "react";
import Humidity from "./Details/Humidity";
import Visibility from "./Details/Visibility";
import Pressure from "./Details/Pressure";
import Wind from "./Details/Wind";

const TodayDetails = ({ weatherData = null, unit = "metric" }) => {
  const wind = weatherData?.wind || { speed: "--", deg: "--" };
  const humidity = weatherData?.main?.humidity || "--";
  const visibility = weatherData?.visibility || "--";
  const pressure = weatherData?.main?.pressure || "--";

  return (
    <div className="container">
      <h1 className="font-bold text-2xl mb-6">Today’s Highlights</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Wind wind={wind} unit={unit} />
        <Humidity humidity={humidity} />
        <Visibility visibility={visibility} unit={unit} />
        <Pressure pressure={pressure} />
      </div>
    </div>
  );
};

export default React.memo(TodayDetails);
