import React from "react";
import Header from "./Header";
import ForecastList from "./ForecastList";

const Forecast = () => {
  return (
    <div className="flex-grow text-white p-6">
      <div className="container">
        <Header />
        {/* <ForecastList /> */}
      </div>
    </div>
  );
};

export default Forecast;
