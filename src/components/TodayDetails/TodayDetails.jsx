import React from "react";
import Wind from "./Details/Wind";
import Humidity from "./Details/Humidity";
import Visibility from "./Details/Visibility";
import Pressure from "./Details/Pressure";

const TodayDetails = ({ weatherData = null, unit = "metric" }) => {
  console.log(weatherData);
  const wind = weatherData ? weatherData.wind : { speed: "--", deg: "--" };
  const humidity = weatherData ? weatherData.main.humidity : "--";
  const visibility = weatherData ? weatherData.visibility : "--";
  const pressure = weatherData ? weatherData.main.pressure : "--";

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="font-bold text-2xl mb-6">Today’s Highlights</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {/* <Wind wind={wind} unit={unit} /> */}
        <Humidity humidity={humidity} />
        <Visibility visibility={visibility} unit={unit} />
        <Pressure pressure={pressure} />
      </div>
    </div>
  );
};

export default TodayDetails;
