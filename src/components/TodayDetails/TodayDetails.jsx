// src/components/TodayDetails/TodayDetails.jsx
import React from "react";
import Wind from "./Details/Wind";
import Humidity from "./Details/Humidity";
import Visibility from "./Details/Visibility";
import Pressure from "./Details/Pressure";

const TodayDetails = ({ weatherData, unit }) => {
  console.log("Weather Data:", weatherData);
  console.log("Unit:", unit);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="font-bold text-2xl mb-6">Today’s Highlights</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {/* <Wind windSpeed={windSpeed} unit={unit} />
        <Humidity humidity={humidity} />
        <Visibility visibility={visibility} unit={unit} />
        <Pressure pressure={pressure} /> */}
      </div>
    </div>
  );
};

export default TodayDetails;
