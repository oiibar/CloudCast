import React, { useContext, useState } from "react";
import Header from "./Header";
import ForecastList from "./ForecastList";

const Forecast = ({ forecast = null, unit = "metric" }) => {
  console.log(forecast);
  return (
    <div className="container">
      <Header />
      <ForecastList forecast={forecast} unit={unit} />
    </div>
  );
};

export default Forecast;
