import React from "react";
import Header from "./components/Header";
import ForecastList from "./ForecastList";

const Forecast = ({ forecast, unit }) => (
  <div className="container">
    <Header />
    <ForecastList forecast={forecast} unit={unit} />
  </div>
);

export default React.memo(Forecast);
