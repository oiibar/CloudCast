import React from "react";
import ForecastItem from "./ForecastItem";

const ForecastList = () => {
  return (
    <div className="flex justify-center items-center gap-4 flex-wrap">
      <ForecastItem />
      <ForecastItem />
      <ForecastItem />
      <ForecastItem />
      <ForecastItem />
    </div>
  );
};

export default ForecastList;
