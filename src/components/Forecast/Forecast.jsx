import React from "react";
import Header from "./Header";
import ForecastList from "./ForecastList";

const Forecast = () => {
  return (
    <div className="p-6">
      <div className="flex flex-col justiyfy-between gap-8">
        <Header />
        <ForecastList />
      </div>
    </div>
  );
};

export default Forecast;
