import React from "react";
import Header from "./Header";
import ForecastList from "./ForecastList";

const Forecast = ({ forecast = [], unit = "metric" }) => {
  return (
    <div className="container">
      <Header />
      <ForecastList forecast={forecast} unit={unit} />
    </div>
  );
};

export default Forecast;
