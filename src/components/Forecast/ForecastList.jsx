import React from "react";
import ForecastItem from "./ForecastItem";

const ForecastList = ({ weatherData, unit }) => {
  return (
    <div className="flex lg:justify-between justify-center items-center flex-wrap gap-4 ">
      <ForecastItem />
      <ForecastItem />
      <ForecastItem />
      <ForecastItem />
      <ForecastItem />
    </div>
  );
};

export default ForecastList;
