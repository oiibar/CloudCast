import React from "react";
import ForecastItem from "./ForecastItem";

const ForecastList = ({ forecast, unit }) => {
  if (!forecast || forecast.length === 0) {
    return <div>Loading forecast...</div>; // Or a loading spinner if you prefer
  }
  // console.log(forecast);

  return (
    <div className="flex lg:justify-between justify-center items-center flex-wrap gap-4">
      {forecast.map((item, index) => (
        <ForecastItem key={index} item={item} unit={unit} />
      ))}
    </div>
  );
};

export default ForecastList;
