import React, { useContext, useState } from "react";
import Header from "./Header";
import ForecastList from "./ForecastList";

const Forecast = ({ forecast = null, unit = "metric" }) => {
  console.log(forecast);
  return (
    <div className="p-6">
      <div className="flex flex-col justiyfy-between gap-8">
        <Header />
        <ForecastList forecast={forecast} unit={unit} />
      </div>
    </div>
  );
};

export default Forecast;
